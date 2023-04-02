<template>
  <main class="flex flex-col justify-center items-center min-h-screen z-10 relative px-5 py-16">
    <!-- Logo => if logo is outside the white section -->
    <img src="../../assets/images/logo.svg" alt="Logo" v-if="isLogoOut" class="mb-20">

    <section class="bg-white text-center w-max rounded-[60px] 
      [ py-12 px-6 sm:px-[86px] ]
      [ flex flex-col justify-center items-center ]
      [ text-3xl font-medium text-brownColor ]">

      <!-- Logo => if logo is inside the white section -->
      <img src="../../assets/images/logo.svg" alt="Logo" v-if="!isLogoOut" class="mb-16">

      <!-- Header -->
      <h1 class="text-5xl font-bold mb-5 text-black">{{ header }}</h1>

      <!-- Sub header -->
      <p class="leading-5 mb-12">{{ subHeader }}</p>

      <!-- Rest of component -->
      <slot name="section" />
    </section>

    <!-- If there is a text under white section -->
    <slot name="text-bottom" />
  </main>
</template>

<script lang="ts">
export default {
  props: {
    isLogoOut: Boolean,
    header: String,
    subHeader: String,
  }
}
</script>