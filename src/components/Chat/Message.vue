<template>
  <p class="py-5 px-12 text-3xl w-max text-white rounded-full" :style='{
    color: message?.message_position === "me" ? "white" : "#14203f",
    backgroundColor:
      message?.message_position === "me" ? "#6C98A2" : "#f7f5ef",
    marginRight: message?.message_position === "me" ? 0 : "auto"
  }'>
    {{ message?.message }}
  </p>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { IChatMessage } from '../../Types/ChatMessage';

export default {
  props: {
    message: Object as PropType<IChatMessage>
  }
}
</script>