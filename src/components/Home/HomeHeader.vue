<template>
  <header class="h-[calc(100vh_-_111px)] flex gap-20 items-center">
    <VerticalSwiper>
      <template #item="{ img, text }">
        <div class="[ flex items-center justify-around ] 
          [ w-full h-full ]
          px-16">
          <p class="text-[82px] font-bold leading-[62px]">{{ text }}</p>
          <img :src="img" alt="Illustrated image" class="object-contain pt-14 [ h-full w-auto ]">
        </div>
      </template>
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
import VerticalSwiper from '../Swiper/VerticalSwiper.vue';

export default {
  components: { VerticalSwiper }
}
</script>