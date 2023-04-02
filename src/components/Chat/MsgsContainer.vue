<template>
  <main class="w-4/5 mx-auto flex flex-col gap-10
      max-h-[350px] overflow-auto" ref="messages">
    <!-- Loop for message and reverse them to show the newest message in the bottom -->
    <Message v-for="msg in messages.slice().reverse()" :key="msg.message_id" :message="msg" />
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
  components: { Message },
  updated() {
    // Scroll to the bottom to the last message
    const messageDisplay: any = this.$refs.messages;
    messageDisplay.scrollTop = messageDisplay.scrollHeight;
  },
}
</script>