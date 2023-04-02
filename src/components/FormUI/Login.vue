<template>
  <AuthContainer header="تسجيل الدخول إلى حسابك" sub-header="من فضلك قم بتسجيل بياناتك لتسجيل الدخول" :is-logo-out="true">

      <template #section>
        <Form class="flex flex-col gap-7 w-full" :validation-schema="schema" @submit="handleSubmit">
          <Input id="email" label="البريد الإلكتروني" placeholder="البريد الإلكتروني" name="username" type="email" />
          <Input id="password" label="كلمة المرور" placeholder="كلمة المرور" name="password" type="password" />

          <p v-if="apiError" class="text-base text-errorColor block text-right" >{{ apiError }}</p>

          <RouterLink to="/forget-password" class="my-4 text-xl leading-5 text-errorColor">نسيت كلمة المرور</RouterLink>

          <Button type="submit" text="تسجيل دخول" class-names="mx-auto" />
        </Form>
      </template>

      <template #text-bottom>
        <p class="leading-5 text-4xl font-medium text-brownColor mt-7">
          ليس لديك حساب بالفعل؟ 
          <RouterLink to="/register" class="font-bold text-black">إنشاء حساب جديد</RouterLink>
        </p>
      </template>
    </AuthContainer>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { Form } from "vee-validate"
import AuthContainer from '../AuthLayout/AuthContainer.vue';
import Button from '../Button/Button.vue';
import Input from '../FormControl/Input.vue';

export default {
  components: { AuthContainer, Input, Button, Form },
  props: {
    schema: Object,
    handleSubmit: {
      type: Function as PropType<(data: any) => Promise<void>>,
      required: true
    },
    apiError: String
  },
}
</script>