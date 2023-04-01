<template>
  <ActivateAccount :phone="phone" :update-code="updateCode" :on-submit-handler="onSubmitHandler"
    :code-error="codeError" />
</template>

<script lang="ts">
import ActivateAccount from '../components/FormUI/ActivateAccount.vue';
import { verifyAccountHandler } from '../services/AuthService';

export default {
  components: { ActivateAccount },
  data() {
    return {
      phone: "",
      code: "",
      codeError: ""
    }
  },
  mounted() {
    this.phone = this.$route.params.number as string;
  },
  methods: {
    updateCode(code: string) {
      this.code = code
    },
    async onSubmitHandler() {
      if (this.code.includes("-"))
        this.codeError = "الكود خاطئ"
      else {
        this.codeError = ""

        try {
          const data = await verifyAccountHandler({ code: this.code, phone: this.phone })
          if (data.status === "success")
            this.$router.push("/login")
        } catch (err: any) {
          if (err.response.data.status === "fail") {
            this.codeError = err.response.data.message as string
          }
        }
      }
    }
  }
}
</script>