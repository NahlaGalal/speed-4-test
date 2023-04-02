<template>
  <ForgetPassword :schema="schema" :handle-submit="handleSubmit" :apiError="apiError" />

  <!-- Loading component -->
  <Loading v-model:active="loading" :is-full-page="true" />
</template>

<script lang="ts">
import { IForgetPasswordFormTypes } from '../Types';
import ForgetPassword from '../components/FormUI/ForgetPassword.vue';
import { object, string } from "yup"
import { forgetPasswordHandler } from '../services/AuthService';
import Loading from 'vue-loading-overlay';

export default {
  components: { ForgetPassword, Loading },
  setup() {
    const schema = object({
      phone: string().matches(/^(9665|05)\d+$/, 'يجب أن يحتوي رقم الجوال على ارقام فقط ويبدأ ب9665 أو 05')
        .required("رقم الجوال مطلوب"),
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
    async handleSubmit(values: IForgetPasswordFormTypes) {
      this.loading = true;

      try {
        const data = await forgetPasswordHandler(values)
        this.loading = false;

        if (data.status === "success")
          this.$router.push({ name: "Password code page", params: { number: values.phone } })
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