<template>
  <FavouriteHeader />
  <CardsContainer :products="products" @toggle-favourites="toggleFavourite" />
</template>

<script lang="ts">
import CardsContainer from '../components/Cards/CardsContainer.vue';
import FavouriteHeader from '../components/Favourite/FavouriteHeader.vue';
import { getFavouriteProducts, toggleFavouritesHandler } from "../services/FavouritesService"
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
    },
    async toggleFavourite(productId: number) {
      try {
        // Add / Remove from favourites
        await toggleFavouritesHandler(productId);

        // Update products
        await this.getProducts();
      } catch (err) {
        console.log(err)
      }
    }
  },
  mounted() {
    this.getProducts()
  },
}
</script>