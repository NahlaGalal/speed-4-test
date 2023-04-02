<template>
  <section class="custom-container [ flex items-center flex-col-reverse xl:flex-row ] ">
    <!-- Text container -->
    <div class="xl:w-4/6
      [ rounded-r-[40px] bg-[#f7f5ef] ]
      [ py-32 px-2 ]
      [ border border-[#edf0f3] ]">

      <!-- Take 2/3 of the full width only -->
      <div class="[ flex flex-col ] xl:w-4/6">

        <!-- About header -->
        <h2 class="text-6xl font-bold">معلومات عنا</h2>

        <!-- About text -->
        <p class="text-2xl font-medium [ mb-10 mt-12">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص
          من مولد النص العربى، حيث يمكنك أن تولد
          مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا
          يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع
          على صورة حقيقية لتصميم الموقع.
          ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على
          المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.
        </p>

        <!-- Read more link -->
        <RouterLink to="/" class="[ text-3xl font-bold ] self-end
        [ flex items-center gap-7 ]">
          إقرأ المزيد
          <img src="../../assets/images/arrow.svg" alt="Arrow icon">
        </RouterLink>
      </div>
    </div>

    <!-- About image -->
    <img src="../../assets/images/home-about.png" alt="Illustrated image" 
    class="mx-auto xl:-mr-48 xl:ml-0">
  </section>
</template>