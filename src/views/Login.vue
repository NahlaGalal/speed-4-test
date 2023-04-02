<template>
  <Login :schema="schema" :handle-submit="handleSubmit" :apiError="apiError" />
</template>

<script lang="ts">
import Login from '../components/FormUI/Login.vue';
import { ILoginFormType } from '../Types';
import { object, string } from "yup"
import { LoginHandler } from '../services/AuthService';

export default {
  components: { Login },
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
      apiError: ""
    }
  },
  methods: {
    async handleSubmit(values: ILoginFormType) {
      try {
        const data = await LoginHandler(values)
        if (data.status === "success")
          this.$router.push("/")
      } catch (err: any) {
        if (err.response.data.status === "fail") {
          this.apiError = err.response.data.message as string
        }
      }
    }
  }
}
</script>