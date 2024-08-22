<template>
  <div class="">
    <div
      class="relative after:bg-black after:absolute after:top-0 after:left-0 after:opacity-45 after:w-full after:h-full"
    >
      <img src="../assets/background.jpg" alt="" />
      <div>
        <div class="absolute z-20 top-0 flex items-center h-fit p-8">
          <RouterLink  to="/WhatOffer" class="text-white text-xl">
            {{ $t('content.aboutpage.titlepage') }}
          </RouterLink >
        </div>
      </div>
    </div>
  </div>
  <div class="w-5/6 mx-auto grid lg:grid-cols-3 grid-cols-1 lg:gap-32 gap-4 my-16">
    <div class="col-span-2">
      <h3 class="pt-3 text-2xl font-bold text-green-400 text-balance md:w-3/6">
        {{ $t('content.aboutpage.paragraphtitle_1') }}
      </h3>
      <p class="pt-3">
        {{ $t('content.aboutpage.paragraph_1') }}
      </p>
      <h3 class="pt-3 text-2xl font-bold text-green-400 text-balance md:w-3/6">
        {{ $t('content.aboutpage.paragraphtitle_2') }}
      </h3>
      <p class="pt-3">
        {{ $t('content.aboutpage.paragraph_2') }}

      </p>
      <h3 class="text-xl">{{ $t('content.aboutpage.paragraphtitle_3') }}
      </h3>
      <p class="pt-3">
        {{ $t('content.aboutpage.paragraph_3') }}
      </p>
    </div>
    <div>
      <div class="bg-blue-300 mb-2 p-4">
        <h2 class="text-white text-2xl font-bold">{{ $t('content.aboutpage.isotitle') }} <span class="text-green-600">{{ $t('content.aboutpage.Documents') }}</span>
        </h2>
        <RouterLink to="Accreditation" >
        <h3 class="text-white text-xl"> ISO <span class="text-green-600">14001:2015</span> </h3>
      </RouterLink>
      </div>
      <div class="bg-blue-300 p-8 text-white">
      <img class="w-32 pb-2" src="../assets/icons/Sustainability.png" alt="" />
      <h3 class="text-xl py-2 font-bold">{{ $t('content.aboutpage.sustainable') }}</h3>
      <p>
        {{ $t('content.aboutpage.sustainable_paragph') }}
      </p>
    </div>
    </div>
  </div>
  <div class="w-5/6 mx-auto">
    <h3 class="text-2xl text-blue-300 mb-2">{{ $t('content.aboutpage.projectandnews') }}</h3>
    <div>
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-8">
        <div class="box">
                <img src=../assets/background2.jpg alt="">
                <data value="" class="text-gray-400">2024-06-20</data>
                <h3 class=" hover:underline underline-offset-3 text-black font-semibold">
                    How to make title
                </h3>
                <p class="line-clamp-1">
                    This pargraph may do nothing
                    This pargraph may do nothing
                    This pargraph may do nothing
                </p>
                <div class="py-4 text-green-600 hover:text-gray-300">
                    <ButtomHover link="/" Hovertext="textHover" />
                </div>
            </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
