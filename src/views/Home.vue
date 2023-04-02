<template>
  <div class="flex flex-col gap-32">
    <HomeHeader :sliders="slider" />
    <HomeAbout />
    <HomeCategories :categories="categories" />
    <HomeProducts :products="latest_auctions" :title="'أحدث المزادات'" v-if="latest_auctions.length"
      @toggle-favourites="toggleFavourite" />
    <HomeAds />
    <HomeProducts :products="latest_products" :title="'أحدث الإضافات'" v-if="latest_products.length"
      @toggle-favourites="toggleFavourite" />

    <!-- Loading component -->
    <Loading v-model:active="isLoading" :is-full-page="true" />
  </div>
</template>

<script lang="ts">
import HomeAbout from '../components/Home/HomeAbout.vue';
import HomeCategories from '../components/Home/HomeCategories.vue';
import HomeHeader from '../components/Home/HomeHeader.vue';
import HomeProducts from '../components/Home/HomeProducts.vue';
import HomeAds from '../components/Home/HomeAds.vue';
import { getHomeDetails } from "../services/HomeService"
import { toggleFavouritesHandler } from "../services/FavouritesService"
import { IHomeDetails } from "../Types"
import Loading from 'vue-loading-overlay';

export default {
  components: { HomeHeader, HomeAbout, HomeCategories, HomeProducts, HomeAds, Loading },
  data(): IHomeDetails["data"] {
    return {
      slider: [],
      categories: [],
      latest_auctions: [],
      latest_products: [],
      isLoading: false
    }
  },
  mounted() {
    this.getHomeData();
  },
  methods: {
    async getHomeData() {
      this.isLoading = true;

      const res: IHomeDetails = await getHomeDetails();

      this.isLoading = false;
      this.slider = res.data.slider;
      this.categories = res.data.categories;
      this.latest_auctions = res.data.latest_auctions;
      this.latest_products = res.data.latest_products;
    },
    async toggleFavourite(productId: number) {
      this.isLoading = true;

      try {
        // Add / Remove from favourites
        await toggleFavouritesHandler(productId);

        // Update products
        await this.getHomeData();

        this.isLoading = false;
      } catch (err) {
        console.log(err)
        this.isLoading = false;
      }
    }
  },
}
</script>