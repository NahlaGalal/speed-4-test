<template>
  <PageHeader bg-image="src/assets/images/favourite-header.png" heading="المفضلة" />
  <CardsContainer :products="products" @toggle-favourites="toggleFavourite" />

  <!-- Loading component -->
  <Loading v-model:active="loading" :is-full-page="true" />
</template>

<script lang="ts">
import CardsContainer from '../components/Cards/CardsContainer.vue';
import PageHeader from '../components/Layout/PageHeader.vue';
import { getFavouriteProducts, toggleFavouritesHandler } from "../services/FavouritesService"
import { IProduct } from '../Types';
import Loading from 'vue-loading-overlay';

export default {
  components: { CardsContainer, PageHeader, Loading },
  data(): { products: IProduct[], loading: boolean } {
    return {
      products: [],
      loading: false
    }
  },
  methods: {
    async getProducts() {
      this.loading = true;
      this.products = await getFavouriteProducts();
      this.loading = false;
    },
    async toggleFavourite(productId: number) {
      this.loading = true

      try {
        // Add / Remove from favourites
        await toggleFavouritesHandler(productId);

        // Update products
        await this.getProducts();
      } catch (err) {
        console.log(err)
        this.loading = false
      }
    }
  },
  mounted() {
    this.getProducts()
  },
}
</script>