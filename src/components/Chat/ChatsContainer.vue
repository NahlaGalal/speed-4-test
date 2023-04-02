<template>
  <main class="w-2/3 mx-auto flex flex-col gap-12">
    <ChatCard v-for="chat in chats" :details="chat" />
  </main>
</template>

<script lang="ts">
import { PropType } from "vue";
import ChatCard from "./ChatCard.vue"
import { IChat } from "../../Types/Chat";

export default {
  components: { ChatCard },
  props: {
    chats: {
      type: Array as PropType<IChat[]>,
      required: true
    }
  }
}
</script>