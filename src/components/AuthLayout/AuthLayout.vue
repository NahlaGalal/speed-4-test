<template>
  <div class="bg-greyColor min-h-screen relative">
    <!-- Top circle -->
    <img src="../../assets/images/part-circle.png" alt="Part circle"
    class="absolute top-0 right-0 max-w-[50%] max-h-[50%]">

    <slot />

    <!-- Bottom image -->
    <img src="../../assets/images/login-img.png" alt="Login image illustrator"
      class="absolute bottom-0 left-0 max-w-[50%] max-h-[50%]">
  </div>
</template>

<script lang="ts">
export default {
  mounted() {
    const userToken = localStorage.getItem("user");

    if(userToken) {
      this.$router.push("/")
    }
  },
}
</script>