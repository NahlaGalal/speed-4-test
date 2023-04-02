<template>
  <component :is="$route.meta.layout || 'div'">
    <RouterView />
  </component>
  
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import 'vue-loading-overlay/dist/css/index.css';
export default {

}
</script>