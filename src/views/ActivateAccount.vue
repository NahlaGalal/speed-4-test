<template>
  <ActivateAccount :phone="phone" :update-code="updateCode" :on-submit-handler="onSubmitHandler"
    :code-error="codeError" />

  <!-- Loading component -->
  <Loading v-model:active="loading" :is-full-page="true" />
</template>

<script lang="ts">
import ActivateAccount from '../components/FormUI/ActivateAccount.vue';
import { verifyAccountHandler } from '../services/AuthService';
import Loading from 'vue-loading-overlay';

export default {
  components: { ActivateAccount, Loading },
  data() {
    return {
      phone: "",
      code: "",
      codeError: "",
      loading: false
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

        this.loading = true

        try {
          const data = await verifyAccountHandler({ code: this.code, phone: this.phone })
          this.loading = false

          if (data.status === "success")
            this.$router.push("/login")
        } catch (err: any) {
          if (err.response.data.status === "fail") {
            this.codeError = err.response.data.message as string
          }
          this.loading = false
        }
      }
    }
  }
}
</script>