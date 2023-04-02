<template>
  <div class="flex flex-col gap-32">
    <HomeHeader :sliders="slider" />
    <HomeAbout />
    <HomeCategories :categories="categories" />
    <HomeProducts :products="latest_auctions" :title="'أحدث المزادات'" v-if="latest_auctions.length" />
    <HomeAds />
    <HomeProducts :products="latest_products" :title="'أحدث الإضافات'" v-if="latest_products.length" />
  </div>
</template>

<script lang="ts">
import HomeAbout from '../components/Home/HomeAbout.vue';
import HomeCategories from '../components/Home/HomeCategories.vue';
import HomeHeader from '../components/Home/HomeHeader.vue';
import HomeProducts from '../components/Home/HomeProducts.vue';
import HomeAds from '../components/Home/HomeAds.vue';
import { getHomeDetails } from "../services/HomeService"
import { IHomeDetails } from "../Types"

export default {
  components: { HomeHeader, HomeAbout, HomeCategories, HomeProducts, HomeAds },
  data(): IHomeDetails["data"] {
    return {
      slider: [],
      categories: [],
      latest_auctions: [],
      latest_products: [],
    }
  },
  async mounted() {
    const res: IHomeDetails = await getHomeDetails();
    this.slider = res.data.slider;
    this.categories = res.data.categories;
    this.latest_auctions = res.data.latest_auctions;
    this.latest_products = res.data.latest_products;
  }
}
</script>