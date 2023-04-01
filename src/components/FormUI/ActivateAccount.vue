<template>
  <AuthContainer header="تفعيل الحساب" sub-header="تم إرسال رسالة على رقم جوالك لتفعيل الحساب" :is-logo-out="true">

    <template #section>
      <p class="leading-5 text-black mb-10">{{ phone }}</p>

      <form class="flex flex-col w-full" @submit.prevent="onSubmitHandler">
        <CodeInput :update-code="updateCode" />
        <p v-if="codeError" class="text-base text-[#fa4248] block text-right">{{ codeError }}</p>

        <p class="mt-10 text-[#6c98a2]">إرسال الكود بعد</p>
        <p class="text-2xl text-[#6c98a2] my-6">{{ minsRemain }}:{{ secsRemain }}</p>

        <button
          :class="(minsRemain === 0 && secsRemain === 0) ? 'cursor-pointer text-[#6c98a2] mb-10' : 'cursor-not-allowed text-[#958a7e] mb-10'"
          :disabled="minsRemain !== 0 || secsRemain !== 0">
          أعد إرسال الكود
        </button>

        <Button type="submit" text="إرسال" class-names="mx-auto" />
      </form>
    </template>

  </AuthContainer>
</template>

<script lang="ts">
import { PropType } from 'vue';
import AuthContainer from '../AuthLayout/AuthContainer.vue';
import Button from '../Button/Button.vue';
import CodeInput from '../FormControl/CodeInput.vue';
import Input from '../FormControl/Input.vue';

export default {
  components: { AuthContainer, Input, Button, CodeInput },
  props: {
    phone: {
      type: String,
      required: true
    },
    updateCode: {
      type: Function as PropType<(code: string) => void>,
      required: true
    },
    onSubmitHandler: {
      type: Function as PropType<() => Promise<void>>,
      required: true
    },
    codeError: String
  },
  data() {
    return {
      minsRemain: 5,
      secsRemain: 0,
    }
  },
  methods: {
    countDownTimer() {
      let interval = setInterval(() => {
        if (this.secsRemain) this.secsRemain--;
        else {
          if (this.minsRemain) {
            this.minsRemain--;
            this.secsRemain = 59;
          } else clearInterval(interval)
        }
      }, 1000)
    },
  },
  created() {
    this.countDownTimer();
  }
}
</script>