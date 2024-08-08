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
                Contact Us
              </h3>
              <p>
                At Green Life Environmental Studies Company, we are committed to providing
                sustainable services and solutions to our clients. You can contact us via phone or
                email for any inquiries or feedback, as we have a specialized team available to
                respond and provide the necessary support to ensure your satisfaction. We look
                forward to collaborating with you for a more sustainable future.
              </p>
            </div>
            <vee-form>
              <div class="flex flex-col lg:w-8/12 w-full">
                <div class="mt-3">
                  <label for="name" class="block capitalize text-sm font-medium text-slate-700"
                    >Name</label
                  >
                  <vee-field
                    name="name"
                    type="text"
                    class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  />
                </div>
                <div class="mt-3">
                  <label for="email" class="block text-sm capitalize font-medium text-slate-700"
                    >Email</label
                  >
                  <vee-field
                    name="email"
                    type="email"
                    class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  />
                </div>
                <div class="mt-3">
                  <label for="message" class="block text-sm capitalize font-medium text-slate-700"
                    >Message</label
                  >
                  <vee-field
                    name="message"
                    class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  ></vee-field>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  class="px-6 py-2 my-4 text-transparent bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full capitalize"
                >
                  Send
                </button>
              </div>
            </vee-form>
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
                <h4 class="black text-xl">Location</h4>
                <p class="capitalize text-lg">Libya - Tripole - hai alandalus</p>
              </div>
            </div>
            <div class="flex lg:flex-row flex-col w-full justify-center items-center">
              <font-awesome-icon
                class="text-green-400 lg:pb-0 pb-4 text-3xl"
                :icon="['fas', 'phone']"
              />
              <div class="ps-4">
                <h4 class="black text-xl">Location</h4>
                <p class="capitalize text-lg">+218 91 217 0803</p>
                <p class="capitalize text-lg">+218 91 217 0803</p>
              </div>
            </div>
            <div class="flex lg:flex-row flex-col w-full justify-center items-center">
              <font-awesome-icon
                class="text-green-400 lg:pb-0 pb-4 text-3xl"
                :icon="['fas', 'envelope-open']"
              />
              <div class="ps-4">
                <h4 class="black text-xl">Email</h4>
                <p class="capitalize text-lg">info@greenlife.ly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContactUs',
  data() {
    return {}
  }
}
</script>
