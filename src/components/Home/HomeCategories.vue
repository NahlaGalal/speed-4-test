<template>
  <section class="custom-container">
    <ul class="[ grid grid-cols-6 grid-rows-2 gap-6 ]">

      <!-- Loop for all categories -->
      <li v-for="({ id, image, name }) in categories" :key="id" class="[ bg-[#f7f5ef] rounded-xl ]
        [ border border-[#43290a0d] ]
        [ px-6 pb-6 pt-4 ]
        [ flex flex-col items-center justify-center ]
        [ first-of-type:col-span-2 first-of-type:row-span-2 ]">

        <!-- Category icon -->
        <img :src="image" alt="Category icon">

        <!-- Category name -->
        <span class="text-5xl font-bold text-center">{{ name }}</span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { ICategory } from '../../Types';

export default {
  props: {
    categories: Array as PropType<ICategory[]>
  }
}
</script>