<template>
  <NewPassword :schema="schema" :handle-submit="handleSubmit" :apiError="apiError" :initial-values="{ phone, code }" />
</template>

<script lang="ts">
import { object, string, ref } from "yup"
import NewPassword from '../components/FormUI/NewPassword.vue';
import { IResetPasswordFormType } from "../Types"
import { resetPasswordHandler } from '../services/AuthService';

export default {
  components: { NewPassword },
  setup() {
    const schema = object({
      phone: string().required(),
      code: string().required(),
      password: string().required("كلمة المرور مطلوبة").min(8, "يجب أن تحتوي كلمة المرور على 8 أحرف على اﻷقل"),
      confirm_password: string().oneOf([ref("password")], "يجب أن تتطابق كلمتا المرور").required("تأكيد كلمة المرور مطلوبة"),
    })

    return {
      schema
    }
  },
  data() {
    return {
      apiError: "",
      phone: "",
      code: "",
    }
  },
  mounted() {
    this.phone = this.$route.params.phone as string;
    this.code = this.$route.params.code as string;
  },
  methods: {
    async handleSubmit(values: IResetPasswordFormType) {
      try {
        const data = await resetPasswordHandler(values)
        if (data.status === "success")
          this.$router.push("/login")
      } catch (err: any) {
        if (err.response.data.status === "fail") {
          this.apiError = err.response.data.message as string
        }
      }
    }
  }
}
</script>