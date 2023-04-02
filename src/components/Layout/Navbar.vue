<template>
  <nav class="relative [ flex justify-between items-center gap-5 ] 
      px-5 md:px-14 h-[111px] z-10">
    <!-- Hamburger icon -->
    <!-- Show only on small screens -->
    <button class="xl:hidden" @click="toggleCollapse">
      <img src="../../assets/images/bars.svg" alt="Bars icon" class="w-8 h-8">
    </button>

    <!-- Logo -->
    <RouterLink to="/">
      <img src="../../assets/images/logo.svg" class="w-44" />
    </RouterLink>


    <!-- Navigation linls -->
    <ul class="flex flex-wrap gap-10 xl:min-w-[50%] xl:max-w-[50%]
      [ justify-start xl:justify-between ]
      [ flex-col xl:flex-row ]
      [ absolute xl:relative ]
      [ right-0 top-0 ]
      [ bg-[#fbf9f4] xl:bg-transparent ]
      [ h-[calc(100vh_-_111px)] xl:h-auto ]
      [ mt-[111px] xl:mt-0 ]
      [ p-5 pl-10 xl:p-0 ]
      [ overflow-hidden transition-all duration-300 ]" :style="{
        width: isCollabsed ? 0 : 'auto',
        paddingLeft: isCollabsed ? 0 : '40px',
        paddingRight: isCollabsed ? 0 : '20px'}">

      <!-- Show icons in drawer in very small screens -->
      <li class="md:hidden">
        <ul class="flex flex-wrap items-center gap-4">
          <li class="h-5">
            <button>
              <img src="../../assets/images/search.svg" alt="Search icon" title="Search" />
            </button>
          </li>

          <li>
            <RouterLink to="/chats">
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
      </li>

      <li class="text-2xl leading-7 font-medium">
        <RouterLink to="/">الرئيسية</RouterLink>
      </li>
      <li class="text-2xl leading-7 font-medium">
        <RouterLink to="/">من نحن</RouterLink>
      </li>
      <li class="text-2xl leading-7 font-medium">
        <RouterLink to="/">العروض</RouterLink>
      </li>
      <li class="text-2xl leading-7 font-medium">
        <RouterLink to="/">الباقات</RouterLink>
      </li>
      <li class="text-2xl leading-7 font-medium">
        <RouterLink to="/">اتصل بنا</RouterLink>
      </li>
      <li class="text-2xl leading-7 font-medium">
        <RouterLink to="/">إضافة إعلان</RouterLink>
      </li>

      <!-- Show in drawer in small screen -->
      <li class="text-lg px-9 py-1 bg-[#f7f5ef] rounded-full font-medium
        xl:hidden">
        <RouterLink to="/landing">سجل الان</RouterLink>
      </li>
    </ul>

    <!-- Icon links and registeration -->
    <!-- In large screens -->
    <ul class="hidden md:flex flex-wrap items-center gap-10">
      <li class="text-lg px-9 py-1 bg-[#f7f5ef] rounded-full font-medium
        hidden xl:block">
        <RouterLink to="/landing">سجل الان</RouterLink>
      </li>

      <li class="h-5">
        <button>
          <img src="../../assets/images/search.svg" alt="Search icon" title="Search" />
        </button>
      </li>

      <li>
        <RouterLink to="/chats">
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

<script lang="ts">
export default {
  data() {
    return {
      isCollabsed: true
    }
  },
  methods: {
    toggleCollapse() {
      this.isCollabsed = !this.isCollabsed
    }
  }
}
</script>