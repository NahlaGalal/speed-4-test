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

export default {
  components: { HomeHeader, HomeAbout, HomeCategories }
}
</script>