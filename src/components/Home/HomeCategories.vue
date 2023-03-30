<template>
  <section class="custom-container">
    <ul class="[ grid grid-cols-6 grid-rows-2 gap-6 ]">

      <!-- Loop for all categories -->
      <li v-for="(item) in fakeData" :key="item.id"
      class="[ bg-[#f7f5ef] rounded-xl ]
      [ border border-[#43290a0d] ]
      [ px-6 pb-6 pt-4 ]
      [ flex flex-col items-center justify-center ]
      [ first-of-type:col-span-2 first-of-type:row-span-2 ]">

        <!-- Category icon -->
        <img src="../../assets/images/category.png" alt="Category icon">

        <!-- Category name -->
        <span class="text-5xl font-bold text-center">{{ item.name }}</span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      fakeData: [
        {
          id: 1,
          name: "الإتصالات وملحقاتها",
          image: "phones.png"
        },
        {
          id: 2,
          name: "الأحذية والحقائب",
          image: "bags.png"
        },
        {
          id: 3,
          name: " المكياج والعطور",
          image: "makeup.png"
        },
        {
          id: 4,
          name: "اثاث منزلي",
          image: "furniture.png"
        },
        {
          id: 5,
          name: "أجهزة إلكترونية",
          image: "electronics.png"
        },
        {
          id: 6,
          name: "أجهزة رياضية",
          image: "sports.png"
        },
        {
          id: 7,
          name: "إكسسوارات سيارات",
          image: "cars.png"
        },
        {
          id: 8,
          name: "مستلزمات الطفل",
          image: "kids.png"
        },
        {
          id: 9,
          name: "الأزياء والملابس",
          image: "fashion.png"
        },
      ]
    }
  }
}
</script>