<template>
  <section class="custom-container">
    <h2 class="text-6xl leading-[50px] font-bold text-center mb-[75px]">{{ title }}</h2>

    <CardsSwiper :products="products" />

    <RouterLink to="/" class="[ text-2xl font-bold ] mt-[88px]
      [ flex justify-center items-center gap-8 ]">
      عرض الكل
      <img src="../../assets/images/arrow.svg" alt="Arrow icon">
    </RouterLink>
  </section>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { IProduct } from "../../Types";
import HorizontalSwiper from '../Swiper/HorizontalSwiper.vue';
import CardsSwiper from '../Cards/CardsSwiper.vue';

export default {
  components: { HorizontalSwiper, CardsSwiper },
  props: {
    products: Array as PropType<IProduct[]>,
    title: String
  }
}
</script>