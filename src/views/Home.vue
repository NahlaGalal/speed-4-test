<template>
  <div class="flex flex-col gap-32">
    <HomeHeader />
    <HomeAbout />
    <HomeCategories />
  </div>
</template>

<script lang="ts">
import HomeAbout from '../components/Home/HomeAbout.vue';
import HomeCategories from '../components/Home/HomeCategories.vue';
import HomeHeader from '../components/Home/HomeHeader.vue';
import { getHomeDetails } from "../services/HomeService"
import { IHomeDetails } from "../components/Home/Types"

export default {
  components: { HomeHeader, HomeAbout, HomeCategories },
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