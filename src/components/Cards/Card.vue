<template>
  <div class="flex flex-col gap-4 text-right h-full">
    <!-- Product image -->
    <img :src="product?.main_image" :alt="product?.name + 'Image'" class="h-80 xl:h-[518px] w-full object-cover rounded-[20px] product-image" />

    <!-- Product name -->
    <p class="text-2xl font-bold leading-5 whitespace-nowrap text-ellipsis overflow-hidden">{{ product?.name }}</p>

    <!-- Product category -->
    <p class="text-[#958a7e] text-lg font-light" v-if="product?.category?.name">{{ product?.category?.name }}</p>

    <div class="flex items-center gap-6 flex-wrap mt-auto">
      <!-- Product price -->
      <p class="text-xl font-semibold">{{ product?.product_price }} ر.س</p>

      <!-- Share the product -->
      <button class="mr-auto">
        <img src="../../assets/images/share.svg" alt="Share icon" title="Share this product" class="h-7 w-auto">
      </button>

      <!-- Add to favourite -->
      <button @click="toggleFavouritesHandler(product.id)">
        <img v-if="product?.is_fav" src="../../assets/images/heart-filled.svg" alt="Favourite icon" title="Remove from favourites" class="h-7 w-auto">
        <img v-else src="../../assets/images/heart.svg" alt="Favourite icon" title="Add to favourites" class="h-7 w-auto">
      </button>
    </div>

    
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { IProduct } from '../../Types';
import { useSwiper } from "swiper/vue"

export default {
  emits: ['toggleFavourites'],
  props: {
    product: {
      type: Object as PropType<IProduct>,
      required: true
    }
  },
  setup() {
    const swiper = useSwiper();

    return {
      swiper
    }
  },
  methods: {
    toggleFavouritesHandler(productId: number) {
      this.$emit("toggleFavourites", productId);
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 1600px) and (min-width: 1280px) {
  .product-image {
    height: 320px;
  }
}
</style>