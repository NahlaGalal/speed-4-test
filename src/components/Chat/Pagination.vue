<template>
  <div class="flex gap-6 justify-center mt-12">
    <button v-for="link in meta.links" :key="link.label" v-html="link.label" class="text-3xl disabled:cursor-not-allowed"
      :disabled="!link.active" @click="$emit('getChats', link.url)" />
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { IPagination } from '../../Types/Chat';
import { emit } from 'process';

export default {
  emits: ["getChats"],
  props: {
    meta: {
      type: Object as PropType<IPagination>,
      required: true
    }
  }
}
</script>