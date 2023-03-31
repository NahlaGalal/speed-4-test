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
  <div class="bg-[#fbf9f4]">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>