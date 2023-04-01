<template>
  <ForgetPassword :schema="schema" :handle-submit="handleSubmit" :apiError="apiError" />
</template>

<script lang="ts">
import { IForgetPasswordFormTypes } from '../Types/ForgetPassword';
import ForgetPassword from '../components/FormUI/ForgetPassword.vue';
import { object, string } from "yup"
import { forgetPasswordHandler } from '../services/AuthService';

export default {
  components: { ForgetPassword },
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
      apiError: ""
    }
  },
  methods: {
    async handleSubmit(values: IForgetPasswordFormTypes) {
      try {
        const data = await forgetPasswordHandler(values)
        if (data.status === "success")
          this.$router.push({ name: "Password code page", params: { number: values.phone } })
      } catch (err: any) {
        if (err.response.data.status === "fail") {
          this.apiError = err.response.data.message as string
        }
      }
    }
  }
}
</script>