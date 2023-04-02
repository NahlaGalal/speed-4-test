<template>
  <Login :schema="schema" :handle-submit="handleSubmit" :apiError="apiError" />

  <!-- Loading component -->
  <Loading v-model:active="loading" :is-full-page="true" />
</template>

<script lang="ts">
import Login from '../components/FormUI/Login.vue';
import { ILoginFormType } from '../Types';
import { object, string } from "yup"
import { LoginHandler } from '../services/AuthService';
import Loading from 'vue-loading-overlay';

export default {
  components: { Login, Loading },
  setup() {
    const schema = object({
      username: string().required("البريد الالكتروني مطلوب").email("هذا البريد الالكتروني غير صالح"),
      password: string().required("كلمة المرور مطلوبة").min(8, "يجب أن تحتوي كلمة المرور على 8 أحرف على اﻷقل"),
    })

    return {
      schema
    }
  },
  data() {
    return {
      apiError: "",
      loading: false
    }
  },
  methods: {
    async handleSubmit(values: ILoginFormType) {
      this.loading = true

      try {
        const data = await LoginHandler(values)

        this.loading = false
        if (data.status === "success")
          this.$router.push("/")
      } catch (err: any) {
        if (err.response.data.status === "fail") {
          this.apiError = err.response.data.message as string
        }

        this.loading = false
      }
    }
  }
}
</script>