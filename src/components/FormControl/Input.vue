<template>
  <div>
    <label :for="id" class="text-lg font-medium leading-6 mb-1 text-brownColor block text-right">{{ label }}</label>
    <Field :type="type" :placeholder="placeholder" :id="id" :name="name" class="[ border-0 border-b borer-b-[#DDD] ]
    [ text-xl font-medium leading-7 ]
    [ text-black placeholder:text-black ]
    outline-none w-full pb-1 " />
    <ErrorMessage :name="name" class="text-base text-errorColor block text-right" />
  </div>
</template>

<script lang="ts">
import { Field, ErrorMessage } from "vee-validate"

export default {
  components: { Field, ErrorMessage },
  props: {
    type: String,
    placeholder: String,
    id: String,
    name: {
      type: String,
      required: true
    },
    label: String
  }
}
</script>