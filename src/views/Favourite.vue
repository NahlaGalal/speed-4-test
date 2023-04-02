<template>
  <FavouriteHeader />
  <CardsContainer :products="products" />
</template>

<script lang="ts">
import CardsContainer from '../components/Cards/CardsContainer.vue';
import FavouriteHeader from '../components/Favourite/FavouriteHeader.vue';
import { getFavouriteProducts } from "../services/FavouritesService"
import { IProduct } from '../Types';

export default {
  components: { FavouriteHeader, CardsContainer },
  data(): { products: IProduct[] } {
    return {
      products: []
    }
  },
  methods: {
    async getProducts() {
      this.products = await getFavouriteProducts();
    }
  },
  mounted() {
    this.getProducts()
  },
}
</script>