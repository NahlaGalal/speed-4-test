<template>
  <section class="flex flex-wrap gap-7 pb-6 border-b-[3px] border-b-[#ddd]">
    <!-- Reciever image -->
    <img :src="details.receiver_data.image" alt="Reciever data" class="w-28 h-28 rounded-full object-cover">

    <div class="flex-1">
      <div class="flex justify-between flex-wrap items-center gap-4 mb-2 ">
        <!-- Reciever name -->
        <RouterLink :to="'/chat/' + details.product_id + '/' + details.receiver_id" class="text-[40px] font-bold leading-[45px]">{{ details.receiver_data.username }}</RouterLink>

        <!-- Date of chat -->
        <p class="text-3xl leading-[55px] font-medium text-[#bcbcbe]">{{ details.created_at }}</p>
      </div>

      <!-- Last message -->
      <p class="text-[#bcbcbe] text-2xl">{{ details.last_message }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { PropType } from "vue";
import { IChat } from "../../Types/Chat";

export default {
  props: {
    details: {
      type: Object as PropType<IChat>,
      required: true
    }
  }
}
</script>