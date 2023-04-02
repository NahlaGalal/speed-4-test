<template>
  <HorizontalSwiper>
    <swiper-slide v-for="product in products" :key="product.id">
      <Card :product="product" />
    </swiper-slide>
  </HorizontalSwiper>
</template>

<script lang="ts">
import { SwiperSlide, useSwiper } from "swiper/vue"
import { PropType } from 'vue';
import { IProduct } from '../../Types';
import Card from './Card.vue';
import HorizontalSwiper from '../Swiper/HorizontalSwiper.vue';

export default {
  components: { Card, HorizontalSwiper, SwiperSlide },
  setup() {
    const swiper = useSwiper();

    return { swiper };
  },
  props: {
    products: Array as PropType<IProduct[]>
  },
}
</script>