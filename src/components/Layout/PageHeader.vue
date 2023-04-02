<template>
  <header :class="`h-60 leading-[50px] mb-32
    [ bg-cover ] [ flex flex-col justify-center items-center ]`"
    :style="{ backgroundImage: `url('` + bgImage + `')` }">
    <h1 class="text-6xl font-bold tracking-[-0.96px]">{{ heading }}</h1>

    <p class="flex items-center gap-1 text-2xl font-bold">
      <span>الرئيسية</span>
      <span>&gt;</span>
      <span>{{ heading }}</span>
    </p>
  </header>
</template>

<script lang="ts">
export default {
  props: {
    bgImage: {
      type: String,
      required: true,
      default: "src/assets/images/chat-header.png"
    },
    heading: {
      type: String,
      required: true
    }
  }
}
</script>