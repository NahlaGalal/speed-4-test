<template>
  <section class="[ bg-[url(src/assets/images/home-ads.png)] bg-contain bg-no-repeat ] 
    [ min-h-[calc(100vw_/_2.503)] flex items-center ]
    [ text-white ]">

    <div class="[ flex flex-col justify-center ] 
    [ w-max h-full custom-container ]">
      <p class="opacity-60 text-5xl font-Montserrat self-end">Super Sale</p>
  
      <p class="text-7xl font-semibold font-Montserrat mt-2.5 mb-5">New Collection</p>
  
      <RouterLink to="/" class="[ text-3xl font-bold ]
      [ flex gap-6 items-center ]">
        <img src="../../assets/images/arrow-white.svg" alt="Arrow icon" class="rotate-180">
        Shop Now
      </RouterLink>
    </div>

  </section>
</template>