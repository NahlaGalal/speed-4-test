<template>
  <AuthContainer header="كلمة المرور الجديدة" sub-header="من فضلك أدخل كلمة المرور الجديدة" :is-logo-out="true">

    <template #section>
      <form class="flex flex-col gap-7 w-full">
        <Input id="password" label="كلمة المرور الجديدة" placeholder="************" name="password" type="password" />
        <Input id="confirm_password" label="تأكيد كلمة المرور الجديدة" placeholder="************" name="confirm_password"
          type="password" />
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