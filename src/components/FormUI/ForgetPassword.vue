<template>
  <AuthContainer header="تأكيد الحساب" sub-header="من فضلك ادخل رقم جوالك" :is-logo-out="false">

    <template #section>
      <form class="flex flex-col gap-7 w-full">
        <Input id="phone" label="رقم الجوال" placeholder="رقم الجوال" name="phone" type="phone" />
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