<template>
  <main class="w-4/5 mx-auto flex flex-col gap-10">
    <Message v-for="msg in messages" :key="msg.message_id" :message="msg" />
  </main>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { IChatMessage } from '../../Types/ChatMessage';
import Message from './Message.vue';

export default {
  props: {
    messages: {
      type: Array as PropType<IChatMessage[]>,
      required: true
    }
  },
  components: { Message }
}
</script>