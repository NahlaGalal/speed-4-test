<template>
  <AuthContainer header="تفعيل الحساب" sub-header="تم إرسال رسالة على رقم جوالك لتفعيل الحساب" :is-logo-out="true">

    <template #section>
      <p class="leading-5 text-black mb-10">+966 5478 965544</p>

      <form class="flex flex-col w-full">
        <Input id="phone" label="رقم الجوال" placeholder="رقم الجوال" name="phone" type="phone" />

        <p class="mt-10 text-[#6c98a2]">إرسال الكود بعد</p>
        <p class="text-2xl text-[#6c98a2] my-6">1:50</p>

        <button class="text-[#6c98a2] mb-10">أعد إرسال الكود</button>

        <Button type="submit" text="إرسال" class-names="mx-auto" />
      </form>
    </template>

  </AuthContainer>
</template>

<script lang="ts">
import AuthContainer from '../AuthLayout/AuthContainer.vue';
import Button from '../Button/Button.vue';
import Input from '../FormControl/Input.vue';

export default {
  components: { AuthContainer, Input, Button }
}
</script>