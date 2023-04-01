<template>
  <div ref="code" class="flex justify-between gap-6 flex-wrap">
    <input type="text" v-for="(_, ind) in digits" :key="String(ind)" v-model="digits[ind]" :autofocus="ind === 0"
      maxlength="1" @keydown="handleKeyDown($event, ind)"
      class="[ h-[72px] w-20 ] text-center [ rounded-lg border border-[#e8eaef] bg-[#f8f9fc] ]">
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';

export default {
  props: {
    updateCode: {
      type: Function as PropType<(value: string) => void>,
      required: true
    }
  },
  data(): { digits: String[] } {
    return {
      digits: ['-', '-', '-', '-', '-'],
    }
  },
  methods: {
    handleKeyDown(event: KeyboardEvent, index: number) {
      // Prevent from typing any chacter except number, Backspace, tab, arrow right and arrow left
      if (event.key !== "Tab" &&
        event.key !== "ArrowRight" &&
        event.key !== "ArrowLeft"
      ) {
        event.preventDefault();
      }

      // Allow remove the focused input and focus the previous input
      if (event.key === "Backspace") {
        this.digits[index] = "-";
        this.updateCode(this.digits.join(""))
        if (index != 0) {
          ((this.$refs.code as any).children)[index - 1].focus();
        }
        return;
      }

      // If the user enteres a number 
      if ((new RegExp('^([0-9])$')).test(event.key)) {
        this.digits[index] = event.key;
        this.updateCode(this.digits.join(""))

        // Navigate to the next input if it is not the last input
        if (index != 4) {
          ((this.$refs.code as any).children)[index + 1].focus();
        }
      }

    }
  }

}
</script>