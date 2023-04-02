<template>
  <PageHeader bg-image="/src/assets/images/chat-header.png" heading="بيت الأزياء" />
  <MsgsContainer :messages="messages" />
</template>

<script lang="ts">
import { IChatDetails } from "../Types/ChatMessage"
import MsgsContainer from "../components/Chat/MsgsContainer.vue"
import PageHeader from "../components/Layout/PageHeader.vue";
import { getChatDetailsHandler } from "../services/ChatService"

export default {
    data(): IChatDetails {
        return {
            productId: this.$route.params.productId as string,
            recieverId: this.$route.params.recieverId as string,
            messages: []
        };
    },
    mounted() {
        this.getChatDetails();
    },
    methods: {
        async getChatDetails() {
            this.messages = await getChatDetailsHandler(this.productId, this.recieverId);
        }
    },
    components: { MsgsContainer, PageHeader }
}
</script>