<template>
  <main class="flex justify-center items-center h-screen z-10 relative px-5">
    <section class="bg-white text-center w-max rounded-[60px] 
        [ py-12 px-6 sm:px-[86px] ]
        [ flex flex-col justify-center items-center ]
        [ text-3xl font-medium text-[#958a7e] ]">
      <img src="../assets/images/logo.svg" alt="Logo">

      <h1 class="text-5xl font-bold mb-5 mt-16 text-black">أهلا بك</h1>

      <p class="leading-5 mb-12">سجل الان و تمتع بمميزات و تجربة فريدة من نوعها</p>

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
    </section>
  </main>
</template>

<script lang="ts">
export default {

}
</script>