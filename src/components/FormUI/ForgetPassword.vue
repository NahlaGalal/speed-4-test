<template>
  <AuthContainer header="تأكيد الحساب" sub-header="من فضلك ادخل رقم جوالك" :is-logo-out="false">

    <template #section>
      <Form class="flex flex-col gap-7 w-full" :validation-schema="schema" @submit="handleSubmit">
        <Input id="phone" label="رقم الجوال" placeholder="رقم الجوال" name="phone" type="phone" />

        <p v-if="apiError" class="text-base text-errorColor block text-right" >{{ apiError }}</p>

        <Button type="submit" text="إنشاء حساب" class-names="mx-auto" />
      </Form>
    </template>
    
  </AuthContainer>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { Form } from "vee-validate";
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