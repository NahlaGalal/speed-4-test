<script lang="ts">
export default {
}
</script>

<template>
  <nav class="[ flex justify-between items-center gap-5 ] 
    px-14 min-h-[111px]">
    <!-- Logo -->
    <img src="../../assets/images/logo.svg" class="w-44"/>

    <!-- Navigation linls -->
    <ul class="flex flex-wrap gap-10 w-1/2 justify-between">
      <li class="text-2xl leading-7 font-medium">
        <RouterLink to="/">الرئيسية</RouterLink>
      </li>
      <li class="text-2xl leading-7 font-medium">
        <RouterLink to="/about">من نحن</RouterLink>
      </li>
      <li class="text-2xl leading-7 font-medium">
        <RouterLink to="/about">العروض</RouterLink>
      </li>
      <li class="text-2xl leading-7 font-medium">
        <RouterLink to="/about">الباقات</RouterLink>
      </li>
      <li class="text-2xl leading-7 font-medium">
        <RouterLink to="/about">اتصل بنا</RouterLink>
      </li>
      <li class="text-2xl leading-7 font-medium">
        <RouterLink to="/about">إضافة إعلان</RouterLink>
      </li>
    </ul>

    <!-- Icon links and registeration -->
    <ul class="flex flex-wrap items-center gap-10">
      <li class="text-lg px-9 py-1 bg-[#f7f5ef] rounded-full font-medium">
        <RouterLink to="/register">سجل الان</RouterLink>
      </li>

      <li class="h-5">
        <button>
          <img src="../../assets/images/search.svg" alt="Search icon" title="Search" />
        </button>
      </li>

      <li>
        <RouterLink to="/chat">
          <img src="../../assets/images/chat.svg" alt="Chat icon" title="Chat" />
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/favourites">
          <img src="../../assets/images/heart.svg" alt="Favourite icon" title="Favourites" />
        </RouterLink>
      </li>

      <li>
        <button>
          <img src="../../assets/images/user.svg" alt="Profile icon" title="Profile" />
        </button>
      </li>
    </ul>
  </nav>
</template>