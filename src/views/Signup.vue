<template>
  <Signup :schema="schema" :handle-submit="handleSubmit" :apiError="apiError" />
</template>

<script lang="ts">
import { ISignupFormType } from '../Types/Signup';
import Signup from '../components/FormUI/Signup.vue';
import { object, string, ref } from "yup"
import { SignupHandler } from '../services/AuthService';

export default {
  components: { Signup },
  setup() {
    const schema = object({
      username: string().required("اسم المستخدم مطلوب"),
      email: string().required("البريد الالكتروني مطلوب").email("هذا البريد الالكتروني غير صالح"),
      password: string().required("كلمة المرور مطلوبة").min(8, "يجب أن تحتوي كلمة المرور على 8 أحرف على اﻷقل"),
      confirm_password: string().oneOf([ref("password")], "يجب أن تتطابق كلمتا المرور").required("تأكيد كلمة المرور مطلوبة"),
      phone: string().matches(/^(9665|05)\d+$/, 'يجب أن يحتوي رقم الجوال على ارقام فقط ويبدأ ب9665 أو 05')
        .required("رقم الجوال مطلوب")
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
    async handleSubmit(values: ISignupFormType) {
      try {
        const data = await SignupHandler(values)
        if(data.status === "success")
          this.$router.push({ name: "Activate account page", params: { number: values.phone } })
      } catch (err: any) {
        if (err.response.data.status === "fail") {
          this.apiError = err.response.data.message as string
        }
      }
    }
  }
}
</script>