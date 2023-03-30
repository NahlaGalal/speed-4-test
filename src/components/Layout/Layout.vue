<script lang="ts">
import Navbar from './Navbar.vue';
export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <div class="bg-[#fbf9f4]">
    <Navbar />
    <slot />
  </div>
</template>