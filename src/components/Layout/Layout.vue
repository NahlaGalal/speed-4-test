<script lang="ts">
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<template>
  <div class="bg-greyColor flex flex-col justify-between min-h-screen">
    <Navbar />

    <div class="flex-1">
      <slot />
    </div>
    <Footer />
  </div>
</template>