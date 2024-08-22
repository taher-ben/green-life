<template>
  <div class="lg:grid grid-cols-2 flex flex-col-reverse">
    <div class="bg-gray-100 xl:w-[70rem] lg:w-[60rem] w-full">
      <div class="mx-10 py-8 h-full flex flex-col justify-between">
        <div class="pt-4">
          <ButtomHover :link="'/'" :Hovertext="$t('NewsAndSubject.buttontitle_1')"></ButtomHover>
          <h3 class="font-bold text-2xl text-blue-900">
            {{ $t('NewsAndSubject.titlepage') }}
          </h3>
        </div>
        <div class="2xl:pe-40 1xl:pe-80 lg:pe-[35rem] md:pe-[30rem] max_lg:px-0">
          <h4 class="font-semibold">{{ $t('NewsAndSubject.paragraphtitle_1') }}</h4>
          <p class="text-lg">
            {{ $t('NewsAndSubject.paragraph_1') }}
          </p>
        </div>
      </div>
    </div>
    <picture class="">
      <img class="lg:py-28" src="../assets/background2.jpg" alt="" />
    </picture>
  </div>
  <div class="py-16 px-10 container mx-auto">
    <h3 class="py-16 text-green-500 font-bold text-xl">{{ $t('NewsAndSubject.titlepage') }}</h3>
    <div class="grid md:grid-cols-3 grid-cols-1 gap-8">
      <div class="box">
        <img src="../assets/background.jpg" alt="" />
        <h3 class="hover:underline underline-offset-3 text-black font-semibold">
          {{ $t('NewsAndSubject.paragraphtitle_2') }}
        </h3>
        <p class="line-clamp-1">
          {{ $t('NewsAndSubject.paragraph_2') }}
        </p>
        <div class="py-4 text-green-600 hover:text-gray-300">
          <RouterLink
            :to="{
              name: 'NewsCom',
              params: { id: '1', ed: 1, pro: 1 }
            }"
            >{{ $t('readmore') }}</RouterLink
          >
        </div>
      </div>
      <div class="box">
        <img src="../assets/background.jpg" alt="" />
        <h3 class="hover:underline underline-offset-3 text-black font-semibold">
          {{ $t('NewsAndSubject.paragraphtitle_2') }}
        </h3>
        <p class="line-clamp-1">
          {{ $t('NewsAndSubject.paragraph_2') }}
        </p>
        <div class="py-4 text-green-600 hover:text-gray-300">
          <RouterLink
            :to="{
              name: 'NewsCom',
              params: { id: '1', pro: 3 }
            }"
            >{{ $t('readmore') }}</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
