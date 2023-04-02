<template>
  <component :is="$route.meta.layout || 'div'">
    <RouterView />
  </component>
  
</template>

<script lang="ts">
import { RouterView } from "vue-router";
export default {

}
</script>