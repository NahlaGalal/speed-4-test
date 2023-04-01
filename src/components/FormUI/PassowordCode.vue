<template>
  <AuthContainer header="كود التحقق" sub-header="تم إرسال رسالة على رقم جوالك لتغيير كلمة المرور" :is-logo-out="true">

    <template #section>
      <p class="leading-5 text-black mb-10">+966 5478 965544</p>

      <form class="flex flex-col w-full">
        <Input id="phone" label="رقم الجوال" placeholder="رقم الجوال" name="phone" type="phone" />
        
        <p class="text-black mt-10">إرسال الكود بعد</p>
        <p class="text-2xl text-black my-6">1:50</p>

        <button class="text-black mb-10">أعد إرسال الكود</button>

        <Button type="submit" text="إنشاء حساب" class-names="mx-auto" />
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