<template>
  <main class="grid grid-cols-4 gap-y-10 gap-x-8 w-4/5 mx-auto">
    <Card v-for="product in products" :key="product.id" :product="product" />
    <p v-if="!products?.length" class="text-[#fa4248] text-6xl text-center col-span-4">لا يوجد منتجات في المفضلة حتى اﻵن</p>
  </main>
</template>

<script lang="ts">import { PropType } from 'vue';
import { IProduct } from '../../Types';
import Card from './Card.vue';

export default {
    props: {
        products: Array as PropType<IProduct[]>
    },
    components: { Card }
}
</script>