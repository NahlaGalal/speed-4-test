<template>
  <footer class="bg-black text-white px-10 sm:px-36 pt-10 pb-3 mt-32">
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-between gap-14">
      <!-- Logo, about and contact data -->
      <div>
        <img src="../../assets/images/logo-white.svg" alt="Logo">

        <p class="mt-12 mb-7 text-xl leading-5">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس
          المساحة، لقد تم توليد هذا النص من مولد النص العربى،
          حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص 
        </p>

        <a href="mailto:example@example.com" class="font-Montserrat text-sm tracking-[1.9px] mb-2">example@example.com</a>
        <p class="font-Montserrat text-sm tracking-[1.9px]">3596546321</p>
      </div>
  
      <!-- Helper links -->
      <nav class="sm:mr-auto"> 
        <h2 class="text-2xl font-bold mb-4">الأقسام الرئيسية</h2>
        <ul class="flex flex-col gap-4">
          <li class="text-lg">
            <RouterLink to="/">المساعدة</RouterLink>
          </li>

          <li class="text-lg">
            <RouterLink to="/">الأسئلة الشائعة</RouterLink>
          </li>

          <li class="text-lg">
            <RouterLink to="/">سياسة الخصوصية</RouterLink>
          </li>

          <li class="text-lg">
            <RouterLink to="/">الشروط والأحكام</RouterLink>
          </li>

          <li class="text-lg">
            <router-link to="/">تعليمات الاستخدام</router-link>
          </li>
        </ul>
      </nav>

      <!-- Navigation links -->
      <nav class="ml-auto">
        <h2 class="text-2xl font-bold mb-4">روابط مهمة</h2>
        <ul class="flex flex-col gap-4">
          <li class="text-lg">
            <router-link to="/">الصفحة الرئيسية</router-link>
          </li>

          <li class="text-lg">
            <router-link to="/">الباقات</router-link>
          </li>

          <li class="text-lg">
            <router-link to="/">من نحن</router-link>
          </li>

          <li class="text-lg">
            <router-link to="/">العروض</router-link>
          </li>

          <li class="text-lg">
            <router-link to="/">اتصل بنا</router-link>
          </li>
        </ul>
      </nav>

      <!-- Download -->
      <div class="sm:mr-auto">
        <h2 class="text-xl text-left">Download Our Mobile App</h2>

        <div class="mt-6 flex items-end gap-7">
          <div>
            <p class="text-xl mb-10 text-left">
              <span class="text-2xl block">Get Our Offers</span>
              only on our app
            </p>

            <div class="flex gap-0.5 flex-wrap">
              <a href="https://www.google.com" title="Download app from Google play">
                <img src="../../assets/images/google-play.png" alt="Google play icon">
              </a>
              <a href="https://www.google.com" title="Download app from App store">
                <img src="../../assets/images/app-store.png" alt="App store icon">
              </a>
            </div>
          </div>

          <img src="../../assets/images/phone.png" alt="Phone image">
        </div>
      </div>
    </div>

    <!-- Copy rights -->
    <p class="text-center ltr mt-7">&copy; 2021 Shop. All rights reserved</p>
  </footer>
</template>

<script lang="ts">
export default {

}
</script>