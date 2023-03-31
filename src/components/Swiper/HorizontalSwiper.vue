<template>
  <div class="flex">
    <!-- Prev arrow -->
    <Navigation navigation-type="prev" />
  
    <swiper :slides-per-view="4" :space-between="65" class="w-[calc(100%_-_100px)]">
      <slot />
    </swiper>
  
    <!-- Next arrow -->
    <Navigation navigation-type="next" />
  </div>
</template>

<script lang="ts">
import { Swiper } from "swiper/vue"
import "swiper/css"
import Navigation from "./Navigation.vue";

export default {
  components: {
    Swiper,
    Navigation
  },
}
</script>