<template>
  <FavouriteHeader />
  <CardsContainer :products="products" />
</template>

<script lang="ts">
import CardsContainer from '../components/Cards/CardsContainer.vue';
import FavouriteHeader from '../components/Favourite/FavouriteHeader.vue';
import { products } from "../utils/prodcutsData"

export default {
  components: { FavouriteHeader, CardsContainer },
  data() {
    return {
      products
    }
  },
}
</script>