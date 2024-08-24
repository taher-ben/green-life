<template>
  <div class="bg-gray-50">
    <div class="container lg:p-32 px-2 bg-gray-50 mx-auto">
      <div class="shadow-xl p-16">
        <div class="xl:grid flex flex-col grid-cols-2 gap-4">
          <div class="my-auto">
            <div>
              <h3
                class="text-2xl font-bold w-fit relative before:absolute before:w-4/6 before:rounded-full before:h-1 before:bg-green-500 before:bottom-0 pb-2"
              >
                {{ $t('content.ContactUs.title') }}
              </h3>
              <p>
                {{ $t('content.ContactUs.description') }}
              </p>
            </div>
            <form @submit.prevent="sendEmail">
              <div class="flex flex-col lg:w-8/12 w-full">
                <div class="mt-3">
                  <label
                    for="firstName"
                    class="block capitalize text-sm font-medium text-slate-700"
                  >
                    {{ $t('content.ContactUs.firstName_label') }}
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div class="mt-3">
                  <label for="lastName" class="block capitalize text-sm font-medium text-slate-700">
                    {{ $t('content.ContactUs.lastName_label') }}
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div class="mt-3">
                  <label for="email" class="block text-sm capitalize font-medium text-slate-700">
                    {{ $t('content.ContactUs.email_label') }}
                  </label>
                  <input
                    name="email"
                    type="email"
                    class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div class="mt-3">
                  <label for="message" class="block text-sm capitalize font-medium text-slate-700">
                    {{ $t('content.ContactUs.message_label') }}
                  </label>
                  <textarea
                    name="message"
                    class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  ></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  class="px-6 py-2 my-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full capitalize"
                >
                  {{ $t('content.ContactUs.send_button') }}
                </button>
              </div>
            </form>
          </div>
          <div class="mx-auto w-full xl:h-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d996.1764553226716!2d13.151304321426645!3d32.87899894136528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sly!4v1722849021061!5m2!1sar!2sly"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="z-20 h-full shadow-xl w-full"
            ></iframe>
          </div>
        </div>
        <div>
          <div class="flex lg:flex-row flex-col items-center justify-evenly mt-6 w-full">
            <div class="flex lg:flex-row flex-col w-full justify-center items-center">
              <font-awesome-icon
                class="text-green-400 lg:pb-0 pb-4 text-3xl"
                :icon="['fas', 'map-location-dot']"
              />
              <div class="ps-4">
                <h4 class="black text-xl">{{ $t('content.ContactUs.location_title') }}</h4>
                <p class="capitalize text-lg">{{ $t('content.ContactUs.location_value') }}</p>
              </div>
            </div>
            <div class="flex lg:flex-row flex-col w-full justify-center items-center">
              <font-awesome-icon
                class="text-green-400 lg:pb-0 pb-4 text-3xl"
                :icon="['fas', 'phone']"
              />
              <div class="ps-4">
                <h4 class="black text-xl">{{ $t('content.ContactUs.phone_title') }}</h4>
                <p dir="rtl" class="capitalize text-lg">
                  {{ $t('content.ContactUs.phone_value_1') }}
                </p>
                <p dir="rtl" class="capitalize text-lg">
                  {{ $t('content.ContactUs.phone_value_2') }}
                </p>
              </div>
            </div>
            <div class="flex lg:flex-row flex-col w-full justify-center items-center">
              <font-awesome-icon
                class="text-green-400 lg:pb-0 pb-4 text-3xl"
                :icon="['fas', 'envelope-open']"
              />
              <div class="ps-4">
                <h4 class="black text-xl">{{ $t('content.ContactUs.email_title') }}</h4>
                <p class="capitalize text-lg">{{ $t('content.ContactUs.email_value') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import emailjs from 'emailjs-com'

// export default {
//   data() {
//     return {
//       formData: {
//         firstName: '',
//         lastName: '',
//         email: '',
//         message: ''
//       }
//     }
//   },
//   methods: {
//     sendEmail() {
//       const templateParams = {
//         from_name: `${this.formData.firstName} ${this.formData.lastName}`,
//         from_email: this.formData.email,
//         message: this.formData.message
//       }
//       emailjs
//         .send(
//           'service_d2a93sm', // استبدل بـ service_id الخاص بك
//           'template_ahe42tg', // استبدل بـ template_id الخاص بك
//           templateParams,
//           'eQsb8SHmph9Xu40HfYURO' // معرف المستخدم العام، يمكنك الاحتفاظ بهذا أو تغييره إذا كان لديك معرف مختلف
//         )
//         .then(
//           (response) => {
//             console.log('SUCCESS!', response.status, response.text)
//             alert('تم إرسال رسالتك بنجاح!')
//           },
//           (error) => {
//             console.error('FAILED...', error)
//             alert('حدث خطأ أثناء إرسال رسالتك.')
//           }
//         )
//     }
//   }
// }
</script>
