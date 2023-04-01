<template>
  <Signup :schema="schema" :handle-submit="handleSubmit" />
</template>

<script lang="ts">
import Signup from '../components/FormUI/Signup.vue';
import { object, string, ref } from "yup"

export default {
  components: { Signup },
  setup() {
    const schema = object({
      username: string().required("اسم المستخدم مطلوب"),
      email: string().required("البريد الالكتروني مطلوب").email("هذا البريد الالكتروني غير صالح"),
      password: string().required("كلمة المرور مطلوبة").min(8, "يجب أن تحتوي كلمة المرور على 8 أحرف على اﻷقل"),
      confirm_password: string().oneOf([ref("password")], "يجب أن تتطابق كلمتا المرور").required("تأكيد كلمة المرور مطلوبة"),
      phone: string().required("رقم الجوال مطلوب")
    })

    return {
      schema
    }
  },
  methods: {
    async handleSubmit(data: any) {
      console.log(data)
    }
  }
}
</script>