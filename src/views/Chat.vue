<template>
  <PageHeader bg-image="/src/assets/images/chat-header.png" heading="بيت الأزياء" />
  <MsgsContainer :messages="messages" />
  <AddMessage :schema="schema" @handle-submit="addMessageHandler" :apiError="apiError" :defaults="{
    product_id, receiver_id, message_type: 'text', message: ''
  }" />

  <!-- Loading component -->
  <Loading v-model:active="loading" :is-full-page="true" />
</template>

<script lang="ts">
import { IChatDetails, ISendMessageFormTypes } from "../Types/ChatMessage"
import AddMessage from "../components/Chat/AddMessage.vue";
import MsgsContainer from "../components/Chat/MsgsContainer.vue"
import PageHeader from "../components/Layout/PageHeader.vue";
import { getChatDetailsHandler, sendMessageHandler } from "../services/ChatService"
import { object, string } from "yup"
import Loading from 'vue-loading-overlay';

export default {
  setup() {
    const schema = object({
      message: string().required("يجب كتابة الرسالة")
    })

    return {
      schema
    }
  },
  data(): IChatDetails {
    return {
      product_id: this.$route.params.productId as string,
      receiver_id: this.$route.params.receiverId as string,
      messages: [],
      apiError: "",
      loading: false
    };
  },
  mounted() {
    this.getChatDetails();
  },
  methods: {
    async getChatDetails() {
      this.loading = true
      this.messages = await getChatDetailsHandler(this.product_id, this.receiver_id);
      this.loading = false
    },
    async addMessageHandler(values: ISendMessageFormTypes) {
      this.loading = true
      try {
        await sendMessageHandler(values)
        this.getChatDetails()
      } catch (err: any) {
        if (err.response.data.status === "fail") {
          this.apiError = err.response.data.message as string
        }
        this.loading = false
      }
    }
  },
  components: { MsgsContainer, PageHeader, AddMessage, Loading }
}
</script>