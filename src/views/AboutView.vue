<template>
    <div class="">
        <div
            class=" relative after:bg-black after:absolute after:top-0 after:left-0 after:opacity-45 after:w-full after:h-full">
            <img src="../assets/background.jpg" alt="">
            <div>
                <div class="absolute z-20 top-0 flex items-center h-fit p-8">
                    <font-awesome-icon @click="prevBox" class="text-white p-2" :icon="['fas', 'arrow-left']" />
                    <router-link to="/WhatWeOffer"
                        class="text-white text-xl hover:text-green-500 hover:underline cursor-pointer underline-offset-4 w-fitff">
                        Information regarding Green Life Company
                    </router-link>
                </div>
            </div>
        </div>
    </div>

    <div>

    </div>
</template>
<script>
export default {

}
</script>