<template>
  <AuthContainer header="تسجيل الدخول إلى حسابك" sub-header="من فضلك قم بتسجيل بياناتك لتسجيل الدخول" :is-logo-out="true">

      <template #section>
        <form class="flex flex-col gap-7 w-full">
          <Input id="phone" label="رقم الجوال" placeholder="رقم الجوال" name="phone" type="phone" />
          <Input id="password" label="كلمة المرور" placeholder="كلمة المرور" name="password" type="password" />

          <RouterLink to="/forget-password" class="my-4 text-xl leading-5 text-[#fa4248]">نسيت كلمة المرور</RouterLink>

          <Button type="submit" text="تسجيل دخول" class-names="mx-auto" />
        </form>
      </template>

      <template #text-bottom>
        <p class="leading-5 text-4xl font-medium text-[#958a7e] mt-7">
          ليس لديك حساب بالفعل؟ 
          <RouterLink to="/register" class="font-bold text-black">إنشاء حساب جديد</RouterLink>
        </p>
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