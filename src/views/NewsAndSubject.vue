<template>
    <div class="lg:grid grid-cols-2 flex flex-col-reverse">
        <div class="bg-gray-100 xl:w-[70rem] lg:w-[60rem] w-full">
            <div class="mx-10 py-8 h-full flex flex-col justify-between">
                <div class=" pt-4"> 
                    <ButtomHover link="/" Hovertext="HomePage"></ButtomHover>
                    <h3 class="font-bold text-2xl text-blue-900">
                        News & Midea
                    </h3>
                </div>
                <div class="2xl:pe-40 1xl:pe-80 lg:pe-[35rem] md:pe-[30rem] max_lg:px-0">
                    <h4 class=" font-semibold">Stay Updated with Green Life</h4>
                    <p class="text-lg">
                        Explore our latest news, company announcements, and insights on sustainable living and environmental conservation. Catch up on our newsletters and upcoming events dedicated to promoting a greener future. For press inquiries, please reach out to our media team.
                    </p>
                </div>
            </div>
        </div>
        <picture class="">
            <img class="lg:py-28" src="../assets/background.jpg" alt="">
        </picture>
    </div>
    <div class="py-16 px-10 container mx-auto">
        <h3 class="py-16 text-green-500 font-bold text-xl">News & Midea</h3>
        <div class="grid grid-cols-3 gap-8">
            <div class="box">
                <img src=../assets/background2.jpg alt="">
                <data value="" class="text-gray-400">2024-06-20</data>
                <h3 class=" hover:underline underline-offset-3 text-black font-semibold">
                    How to make title
                </h3>
                <p class="line-clamp-1">
                    This pargraph may do nothing
                </p>
                <div class="py-4 text-green-600 hover:text-gray-300">
                    <ButtomHover link="/" Hovertext="textHover" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed:{
        textlint:{
            
        }
    }
}
</script>