<template>
  <main class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-8 w-4/5 mx-auto">
    <Card v-for="product in products" :key="product.id" :product="product" @toggle-favourites="$emit('toggleFavourites', $event)" />
    <p v-if="!products?.length" class="text-errorColor text-6xl text-center col-span-4">لا يوجد منتجات في المفضلة حتى اﻵن
    </p>
  </main>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { IProduct } from '../../Types';
import Card from './Card.vue';

export default {
  emits: ["toggleFavourites"],
  props: {
    products: Array as PropType<IProduct[]>
  },
  components: { Card }
}
</script>