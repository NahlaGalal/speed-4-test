<template>
  <header class="h-[calc(100vh_-_111px)] flex gap-20 items-center">
    <VerticalSwiper :sliders="sliders" v-if="sliders?.length" />

    <!-- Social icons -->
    <ul class="pl-14 flex flex-col gap-10">
      <!-- Facebook icon -->
      <li>
        <a href="https://www.facebook.com" target="_blank">
          <img src="../../assets/images/facebook.svg" alt="Facebook icon" class="w-8" />
        </a>
      </li>

      <!-- Twitter icon -->
      <li>
        <a href="https://www.twitter.com" target="_blank">
          <img src="../../assets/images/twitter.svg" alt="Twitter icon" class="w-8" />
        </a>
      </li>

      <!-- Instagram icon -->
      <li>
        <a href="https://www.instagram.com" target="_blank">
          <img src="../../assets/images/instagram.svg" alt="Instagram icon" class="w-8" />
        </a>
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import { PropType } from 'vue';
import VerticalSwiper from '../Swiper/VerticalSwiper.vue';
import { ISlider } from "./Types"

export default {
  components: { VerticalSwiper },
  props: {
    sliders: Array as PropType<ISlider[]>
  },
}
</script>