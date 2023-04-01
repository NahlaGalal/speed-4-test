<template>
  <AuthContainer header="أهلا بك" sub-header="من فضلك أدخل البيانات التالية لإنشاء حساب جديد" :is-logo-out="true">

    <template #section>
      <form class="flex flex-col gap-7 w-full">
        <Input id="name" label="إسم المستخدم" placeholder="إسم المستخدم" name="name" type="text" />
        <Input id="email" label="البريد الإلكتروني" placeholder="البريد الإلكتروني" name="email" type="email" />
        <Input id="phone" label="رقم الجوال" placeholder="رقم الجوال" name="phone" type="phone" />
        <Input id="password" label="كلمة المرور" placeholder="كلمة المرور" name="password" type="password" />
        <Input id="confirm_password" label="تأكيد كلمة المرور" placeholder="تأكيد كلمة المرور" name="confirm_password" type="password" />
        <Button type="submit" text="إنشاء حساب" class-names="mx-auto" />
      </form>
    </template>

    <template #text-bottom>
      <p class="leading-5 text-4xl font-medium text-[#958a7e] mt-7">
        لديك حساب بالفعل؟
        <RouterLink to="/login" class="font-bold text-black">تسجيل دخول</RouterLink>
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