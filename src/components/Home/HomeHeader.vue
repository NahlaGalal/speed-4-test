<template>
  <header class="h-[calc(100vh_-_111px)] flex gap-20 items-center">
    <VerticalSwiper v-if="sliders?.length">
      <swiper-slide v-for="{ image, link, name, id } in sliders" :key="id">
        <a class="[ flex items-center justify-around gap-5 ] 
            [ w-full h-full ]
            px-16" :href="link" target="_blank">
          <span class="text-[82px] font-bold leading-[62px]">{{ name }}</span>
          <img :src="image" alt="Illustrated image" class="object-contain [ w-full h-full ]">
        </a>
      </swiper-slide>
    </VerticalSwiper>

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
import { SwiperSlide } from "swiper/vue"
import VerticalSwiper from '../Swiper/VerticalSwiper.vue';
import { ISlider } from "./Types"

export default {
  components: { VerticalSwiper, SwiperSlide },
  props: {
    sliders: Array as PropType<ISlider[]>
  },
}
</script>