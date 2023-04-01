<template>
  <AuthContainer header="كلمة المرور الجديدة" sub-header="من فضلك أدخل كلمة المرور الجديدة" :is-logo-out="true">

    <template #section>
      <Form class="flex flex-col gap-7 w-full" :validation-schema="schema" @submit="handleSubmit"
        :initial-values="initialValues">
        <Input id="password" label="كلمة المرور الجديدة" placeholder="************" name="password" type="password" />
        <Input id="confirm_password" label="تأكيد كلمة المرور الجديدة" placeholder="************" name="confirm_password"
          type="password" />

        <p v-if="apiError" class="text-base text-[#fa4248] block text-right">{{ apiError }}</p>
        <Button type="submit" text="إرسال" class-names="mx-auto" />
      </Form>
    </template>
  </AuthContainer>
</template>

<script lang="ts">
import { Form } from 'vee-validate';
import AuthContainer from '../AuthLayout/AuthContainer.vue';
import Button from '../Button/Button.vue';
import Input from '../FormControl/Input.vue';
import { PropType } from 'vue';

export default {
  components: { AuthContainer, Input, Button, Form },
  props: {
    schema: Object,
    handleSubmit: {
      type: Function as PropType<(data: any) => Promise<void>>,
      required: true
    },
    apiError: String,
    initialValues: Object as PropType<({ phone: string, code: string })>
  },
}
</script>