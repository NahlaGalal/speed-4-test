<template>
  <PageHeader bg-image="src/assets/images/chat-header.png" heading="المحادثة" />
  <ChatContainer :chats="data" />
</template>

<script lang="ts">
import PageHeader from '../components/Layout/PageHeader.vue';
import { getChatsHandler } from "../services/ChatService"
import { IChatService } from "../Types/Chat"
import ChatContainer from "../components/Chat/ChatsContainer.vue"

export default {
  components: { PageHeader, ChatContainer },
  data(): IChatService {
    return {
      data: [],
      meta: {
        current_page: 0,
        from: 0,
        last_page: 0,
        links: [],
        path: "",
        per_page: 0,
        to: 0,
        total: 0
      }
    }
  },
  methods: {
    async getChats() {
      const { data, meta } = await getChatsHandler();
      this.data = data;
      this.meta = meta
    }
  },
  mounted() {
    this.getChats()
  },
}
</script>