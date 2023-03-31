<template>
  <button @click="swiper.slidePrev()" v-if="navigationType === 'prev'">
    <img src="../../assets/images/prev.svg" alt="Prev icon">
  </button>

  <button @click="swiper.slideNext()" v-if="navigationType === 'next'">
    <img src="../../assets/images/next.svg" alt="Next icon">
  </button>
</template>

<script lang="ts">
import { useSwiper } from "swiper/vue"

export default {
  props: {
    navigationType: String
  },
  setup() {
    const swiper = useSwiper();

    return { swiper };
  },
}
</script>