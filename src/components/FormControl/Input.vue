<template>
  <div>
    <label :for="id" class="text-lg font-medium leading-6 mb-1 text-[#958a7e] block text-right">{{ label }}</label>
    <input :type="type" :placeholder="placeholder" :id="id" :name="name"
      class="[ border-0 border-b borer-b-[#DDD] ]
      [ text-xl font-medium leading-7 ]
      [ text-black placeholder:text-black ]
      outline-none w-full pb-1 ">
  </div>
</template>

<script lang="ts">
export default {
  props: {
    type: String,
    placeholder: String,
    id: String,
    name: String,
    label: String
  }
}
</script>