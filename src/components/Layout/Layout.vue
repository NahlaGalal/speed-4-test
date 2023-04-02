<template>
  <div class="bg-greyColor flex flex-col justify-between min-h-screen">
    <Navbar :is-auth="isAuth" />

    <div class="flex-1">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      isAuth: false,
    }
  },
  mounted() {
    const userToken = localStorage.getItem("user");
    if (userToken) this.isAuth = true;
    else this.isAuth = false

    if (!userToken && this.$route.path !== "/") {
      this.$router.push("/landing")
    }
  },
}
</script>
