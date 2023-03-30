<template>
  <HomeHeader />
  <HomeAbout />
</template>

<script lang="ts">
import HomeAbout from '../components/Home/HomeAbout.vue';
import HomeHeader from '../components/Home/HomeHeader.vue';

export default {
  components: { HomeHeader, HomeAbout }
}
</script>