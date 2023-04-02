<template>
  <Form class="[ flex flex-wrap items-center gap-4 ] 
              [ w-4/5 xl:w-1/2 ]
              [ mx-auto mt-44 ]" :validation-schema="schema" @submit="onSubmitHandler($event)"
    :initial-values="defaults">
    <button title="Send Message" class="[ w-24 h-24 ] 
                  [ rounded-full bg-[#6c98a2] ]
                  [ flex justify-center items-center ]">
      <img src="../../assets/images/send.svg" alt="Send icon">
    </button>

    <Field as="textarea" name="message" class="[ h-[104px] flex-1 ] resize-none
                  [ rounded-full bg-[#f7f5ef] ] 
                  [ text-xl pr-10 py-4 ]
                  [ border border-[#43290A] border-opacity-5 ]" v-model="message"></Field>
    <ErrorMessage name="message" class="w-full text-base text-[#fa4248] block text-right" />
  </Form>
</template>

<script lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate';
import { PropType } from 'vue';
import { ISendMessageFormTypes } from '../../Types/ChatMessage';

export default {
  emits: ["handleSubmit"],
  components: { Form, Field, ErrorMessage },
  props: {
    schema: Object,
    apiError: String,
    defaults: Object as PropType<ISendMessageFormTypes>
  },
  data() {
    return {
      message: ""
    }
  },
  methods: {
    onSubmitHandler(event: any) {
      this.$emit('handleSubmit', event)
      this.message = ''
    }
  }
}
</script>