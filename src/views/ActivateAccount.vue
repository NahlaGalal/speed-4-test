<template>
  <ActivateAccount :phone="phone" />
</template>

<script lang="ts">
import ActivateAccount from '../components/FormUI/ActivateAccount.vue';

export default {
  components: { ActivateAccount },
  data() {
    return {
      phone: ""
    }
  },
  mounted() {
    this.phone = this.$route.params.number as string;
  },
}
</script>