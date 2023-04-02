<template>
  <HorizontalSwiper>
    <swiper-slide v-for="product in products" :key="product.id">
      <Card :product="product" @toggle-favourites="$emit('toggleFavourites', $event)" />
    </swiper-slide>
  </HorizontalSwiper>
</template>

<script lang="ts">
import { SwiperSlide } from "swiper/vue"
import { PropType } from 'vue';
import { IProduct } from '../../Types';
import Card from './Card.vue';
import HorizontalSwiper from '../Swiper/HorizontalSwiper.vue';

export default {
  emits: ['toggleFavourites'],
  components: { Card, HorizontalSwiper, SwiperSlide },
  props: {
    products: Array as PropType<IProduct[]>,
  }
}
</script>