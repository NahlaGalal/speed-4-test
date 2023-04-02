<template>
  <main class="custom-container my-10">
    <img src="../assets/images/error.svg" alt="Error icon" class="w-3/5 mx-auto">
    <h1 className="text-4xl text-errorColor font-bold text-center my-10">
      Page Not Found
    </h1>
    <Button to="/" text="Go Home" classNames="block mx-auto" />
  </main>
</template>

<script lang="ts">
import Button from '../components/Button/Button.vue';

export default {
    components: { Button }
}
</script>