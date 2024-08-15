<template>
  <div class="container mx-auto">
    <div class="lg:grid grid-cols-2 gap-6 flex flex-col-reverse py-8 2xl:w-[100rem] mx-auto">
      <div class="pt-16 px-2">
        <h3 class="text-2xl text-green-600 font-semibold">
          {{ $t(`experts.${id}.About_Me.name`) }}
        </h3>
        <div class="mt-8">
          <h3 class="font-bold text-xl text-black">{{ $t(`experts.${id}.Educationn`) }}</h3>
          <ul>
            <li v-for="(educationItem, index) in $t(`experts.${id}.Education`)" :key="index">
              <span v-if="index < ed">
                {{ $t(`experts.${id}.Education[${index}]`) }}
              </span>
            </li>
          </ul>
        </div>
        <div class="mt-6">
          <h3 class="font-bold text-xl text-black">
            {{ $t(`experts.${id}.Professional_Experiencee`) }}
          </h3>
          <ul>
            <li
              v-for="(experienceItem, index) in $t(`experts.${id}.Professional_Experience`)"
              :key="index"
            >
              <span v-if="index < pro">
                {{ $t(`experts.${id}.Professional_Experience[${index}]`) }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex justify-center items-start">
        <img class="w-96 shadow-2xl rounded-md" :src="pic" alt="Expert's image" />
      </div>
    </div>
  </div>
</template>

<script>
import Dr_Taher_Ibrahim_Al_Tabet from '../assets/Dectors/Dr_Taher_Ibrahim_Al_Tabet.jpg'
import Eng_Khayri_Ali_Gharyani from '../assets/Dectors/blackandwhite1.jpg'
import Dr_Najib_Ali_Bishr from '../assets/Dectors/2.jpeg'

export default {
  data() {
    return {
      images: {
        Dr_Taher_Ibrahim_Al_Tabet: Dr_Taher_Ibrahim_Al_Tabet,
        Eng_Khayri_Ali_Gharyani: Eng_Khayri_Ali_Gharyani,
        Dr_Najib_Ali_Bishr: Dr_Najib_Ali_Bishr
      },
      pic: ''
    }
  },
  props: {
    id: {
      type: String,
      required: true
    },
    ed: {
      type: Number,
      required: true
    },
    pro: {
      type: Number,
      required: true
    }
  },
  mounted() {
    this.setPhoto()
  },
  methods: {
    setPhoto() {
      this.pic = this.images[this.id] || '' // تعيين الصورة بناءً على المعرف
    }
  }
}
</script>
