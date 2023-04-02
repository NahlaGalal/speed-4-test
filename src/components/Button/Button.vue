<template>
  <!-- If to prop is undefined then it is a regular button -->
  <button :type="type" v-if="!to" :class="`[ py-3 px-5 sm:px-24 ] 
  [ w-full sm:w-max ] 
  [ rounded-full bg-mainColor ] 
  [ text-white font-semibold text-3xl ] ` + classNames" 
  @click="onClick">{{ text }}</button>

  <!-- If to prop is not undefined then it is a link -->
  <RouterLink :to="to" v-else :class="`[ py-3 px-5 sm:px-24 ]
    [ w-full sm:w-max ]
    [ rounded-full bg-mainColor ] 
    [ text-white font-semibold text-3xl ] ` + classNames"
    >
    {{ text }}
  </RouterLink>
</template>

<script lang="ts">
import { PropType } from 'vue';

export default {
  props: {
    type: {
      type: String as PropType<"button" | "reset" | "submit">,
      default: "button",
      validator(value: string) {
        // The value must match one of these strings
        return ['button', 'reset', 'submit'].includes(value)
      }
    },
    text: String,
    classNames: String,
    to: String,
    onClick: Function as PropType<(payload: MouseEvent) => void>
  }
}
</script>