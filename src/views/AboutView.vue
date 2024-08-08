<template>
  <div class="">
    <div
      class="relative after:bg-black after:absolute after:top-0 after:left-0 after:opacity-45 after:w-full after:h-full"
    >
      <img src="../assets/background.jpg" alt="" />
      <div>
        <div class="absolute z-20 top-0 flex items-center h-fit p-8">
          <router-link to="/WhatWeOffer" class="text-white text-xl">
            Information regarding Green Life Company
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="w-5/6 mx-auto grid lg:grid-cols-3 grid-cols-1 lg:gap-32 gap-4 my-16">
    <div class="col-span-2">
      <h3 class="pt-3 text-2xl font-bold text-green-400 text-balance md:w-3/6">
        Green Life Environmental Studies Company
      </h3>
      <p class="pt-3">
        Green Life Environmental Studies Company is a leading company in the field of environment
        and sustainability. It works on providing innovative and sustainable environmental solutions
        to promote environmental development in various regions. The company aims to achieve a
        balance between economic development and environmental preservation by offering specialized
        services in environmental studies, consultations, and integrated environmental solutions.
      </p>
      <h3 class="pt-3 text-2xl font-bold text-green-400 text-balance md:w-3/6">
        Environmental Damage Analysis:
      </h3>
      <p class="pt-3">
        The company conducted comprehensive studies to analyze the environmental damages caused by
        Hurricane Daniel in the city of Derna. These studies included an assessment of the damage
        inflicted on the local environment and infrastructure. The company also worked on developing
        environmental recovery plans, including the rehabilitation of affected areas and the
        restoration of damaged ecosystems. Additionally, the company organized awareness campaigns
        for the local community about the importance of environmental conservation and sustainable
        ways to interact with natural crises.
      </p>
      <h3 class="text-xl">Collaboration with the Ministry of Environment in Libya:</h3>
      <p class="pt-3">
        The company worked with the Libyan Ministry of Environment to develop environmental policies
        that enhance environmental protection and promote sustainable development. The company also
        assisted in formulating strategies for sustainable management of natural resources,
        including water and agricultural lands. Additionally, the company organized workshops and
        training programs for government personnel in Libya to enhance their capabilities in
        environmental management and protection.
      </p>
    </div>
    <div>
      <div class="bg-blue-300 mb-2 p-4">
        <h2 class="text-white text-xl">Accreditation and Compliance <span class="text-green-600">Documents</span>
        </h2>
        <RouterLink to="Accreditation" >
        <h3 class="text-white text-xl"> ISO <span class="text-green-600">14001:2015</span> </h3>
      </RouterLink>
      </div>
      <div class="bg-blue-300 p-8 text-white">
      <img class="w-32 pb-2" src="../assets/icons/Sustainability.png" alt="" />
      <h3 class="text-xl py-2 font-bold">Sustainable</h3>
      <p>
        Green Life Environmental Studies Company aims to be the leading partner in providing
        innovative and sustainable environmental solutions and contributing to building a green and
        sustainable future for future generations. The company focuses on raising environmental
        awareness and providing practical solutions that help in preserving the environment and
        achieving sustainable development.
      </p>
    </div>
    </div>
  </div>
  <div class="w-5/6 mx-auto">
    <h3 class="text-2xl text-blue-300 mb-2">Projects</h3>
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
// import { RouterLink } from 'vue-router';

export default {}
</script>
