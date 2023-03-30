<template>
  <swiper :direction="'vertical'" :pagination="pagination" :modules="modules" :slides-per-view="1">
    <swiper-slide v-for="{ image, link, name, id } in sliders" :key="id">
      <a class="[ flex items-center justify-around gap-5 ] 
        [ w-full h-full ]
        px-16" :href="link" target="_blank">
        <span class="text-[82px] font-bold leading-[62px]">{{ name }}</span>
        <img :src="image" alt="Illustrated image" class="object-contain [ w-full h-full ]">
      </a>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper"
import { PropType } from "vue"
import { ISlider } from "../Home/Types"

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    sliders: Array as PropType<ISlider[]>
  },
  setup() {
    return {
      pagination: {
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index: number, className: string) {
          return `<span class="${className}">${(index + 1).toString().padStart(2, '0')}</span>`;
        },
      },
      modules: [Pagination],
    }
  }
}
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #EDF0F3;
  border-radius: 40px 0 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  width: 30px;
  overflow: visible;
}

.swiper-pagination-bullet {
  position: relative;
  font-family: "Montserrat", sans-serif;
  width: 30px;
  height: 30px;
  font-size: 25px;
  color: #1c1d20;
  opacity: 0.3;
  background: transparent;
}

.swiper-pagination-bullet-active {
  opacity: 1;
}

.swiper-pagination-bullet-active::after {
  content: "";
  position: absolute;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background: rgb(28, 29, 32);
  border: 4px solid rgba(28, 29, 32, 0.4);
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  top: 50%;
  left: -27px;
  transform: translateY(-50%);
}
</style>