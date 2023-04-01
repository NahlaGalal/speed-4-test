<template>
  <AuthContainer 
    header="أهلا بك" 
    sub-header="سجل الان و تمتع بمميزات و تجربة فريدة من نوعها" 
    :is-logo-out="false">

    <template #section>
      <Button to="/register" text="إنشاء حساب" />
  
      <RouterLink to="/" class="my-6 leading-5 text-black font-semibold">الدخول كزائر</RouterLink>
  
      <p class="leading-5">
        لديك حساب بالفعل؟
        <RouterLink to="/login" class="font-bold text-black">تسجيل دخول</RouterLink>
      </p>
    </template>
  </AuthContainer>
</template>

<script lang="ts">
import AuthContainer from '../components/AuthLayout/AuthContainer.vue';
import Button from '../components/Button/Button.vue';

export default {
  components: { AuthContainer, Button }
}
</script>