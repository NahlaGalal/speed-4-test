<template>
  <PageHeader bg-image="src/assets/images/chat-header.png" heading="المحادثة" />
  <ChatContainer :chats="data" />
  <Pagination :meta="meta" @get-chats="getChats" />

  <!-- Loading component -->
  <Loading v-model:active="loading" :is-full-page="true" />
</template>

<script lang="ts">
import PageHeader from '../components/Layout/PageHeader.vue';
import { getChatsHandler } from "../services/ChatService"
import { IChatService } from "../Types/Chat"
import ChatContainer from "../components/Chat/ChatsContainer.vue"
import Loading from 'vue-loading-overlay';
import Pagination from '../components/Chat/Pagination.vue';

export default {
  components: { PageHeader, ChatContainer, Loading, Pagination },
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
      },
      loading: false
    }
  },
  methods: {
    async getChats(url?: string) {
      this.loading = true;
      const { data, meta } = await getChatsHandler(url);
      this.data = data;
      this.meta = meta
      this.loading = false
    }
  },
  mounted() {
    this.getChats()
  },
}
</script>