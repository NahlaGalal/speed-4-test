<template>
  <PassowordCode :phone="phone" :update-code="updateCode" :on-submit-handler="onSubmitHandler" :code-error="codeError"
    :reset-code-handler="resetCodeHandler" :key="index" />

  <!-- Loading component -->
  <Loading v-model:active="loading" :is-full-page="true" />
</template>

<script lang="ts">
import PassowordCode from '../components/FormUI/PassowordCode.vue';
import { forgetPasswordHandler, passwordCodeHandler } from '../services/AuthService';
import Loading from 'vue-loading-overlay';

export default {
  components: { PassowordCode, Loading },
  data() {
    return {
      phone: "",
      code: "",
      codeError: "",
      index: 0,
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
      // Check if code is 5 numbers
      if (this.code.includes("-"))
        this.codeError = "الكود خاطئ"
      else {
        this.codeError = ""

        this.loading = true;

        // Send the code
        try {
          const data = await passwordCodeHandler({ code: this.code, phone: this.phone })

          this.loading = false;
          if (data.status === "success")
            this.$router.push({ name: "New password page", params: { code: this.code, phone: this.phone } })
        } catch (err: any) {
          if (err.response.data.status === "fail") {
            this.codeError = err.response.data.message as string
          }
          this.loading = false;
        }
      }
    },
    async resetCodeHandler() {
      this.loading = true;

      // Reset sending the code to the email
      try {
        const data = await forgetPasswordHandler({ phone: this.phone })

        this.loading = false;
        if (data.status === "success")
          // Force the component to rerender
          this.index++;
        this.codeError = ""
      } catch (err: any) {
        if (err.response.data.status === "fail") {
          this.codeError = err.response.data.message as string
        }
        this.loading = false;
      }
    }
  }
}
</script>