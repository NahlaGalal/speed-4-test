<template>
  <component :is="this.$route.meta.layout || 'div'">
    <RouterView />
  </component>
  
</template>

<script lang="ts">
import { RouterView } from "vue-router";
</script>