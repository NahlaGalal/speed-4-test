<template>
  <AuthContainer 
    header="أهلا بك" 
    sub-header="سجل الان و تمتع بمميزات و تجربة فريدة من نوعها" 
    :is-logo-out="false">

    <template #section>
      <RouterLink to="/register" class="[ py-3 px-5 sm:px-24 ]
        [ w-full sm:w-max ]
        [ rounded-full bg-[#6c98a2] ] 
        [ text-white font-semibold ]">
        إنشاء حساب
      </RouterLink>
  
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

export default {
  components: { AuthContainer }
}
</script>