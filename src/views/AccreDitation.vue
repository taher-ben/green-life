<template>
  <div class="container mx-auto">
    <div class="w-full flex max_md:flex-col justify-around py-32">
      <div
        class="md:w-4/12 h-min transform max_md:pb-16 md:-rotate-6 flex max_md:justify-center justify-between"
      >
        <img class="md:w-80 w-96 h-full drop-shadow-2xl" src="../assets/ISO-scaled.jpg" alt="" />
      </div>
      <div class="md:w-6/12">
        <h3 class="text-2xl font-bold text-black text-balance">
          {{ $t('content.Accreditation.titlepage') }}
        </h3>
        <p>
          {{ $t('content.Accreditation.paragraph_1') }}
        </p>
        <h4 class="text-green-500 text-xl text-balance">
          {{ $t('content.Accreditation.subtitle') }}
        </h4>
        <div>
          <ul class="list-disc list-inside">
            <h5 class="font-bold">{{ $t('content.Accreditation.section_1_title') }}</h5>
            <li>{{ $t('content.Accreditation.section_1_item_1') }}</li>
            <li>{{ $t('content.Accreditation.section_1_item_2') }}</li>
          </ul>
          <ul class="list-disc list-inside">
            <h5 class="font-bold">{{ $t('content.Accreditation.section_2_title') }}</h5>
            <li>{{ $t('content.Accreditation.section_2_item_1') }}</li>
            <li>{{ $t('content.Accreditation.section_2_item_2') }}</li>
          </ul>
          <ul class="list-disc list-inside">
            <h5 class="font-bold">{{ $t('content.Accreditation.section_3_title') }}</h5>
            <li>{{ $t('content.Accreditation.section_3_item_1') }}</li>
            <li>{{ $t('content.Accreditation.section_3_item_2') }}</li>
          </ul>
          <ul class="list-disc list-inside">
            <h5 class="font-bold">{{ $t('content.Accreditation.section_4_title') }}</h5>
            <li>{{ $t('content.Accreditation.section_4_item_1') }}</li>
            <li>{{ $t('content.Accreditation.section_4_item_2') }}</li>
          </ul>
          <ul class="list-disc list-inside">
            <h5 class="font-bold">{{ $t('content.Accreditation.section_5_title') }}</h5>
            <li>{{ $t('content.Accreditation.section_5_item_1') }}</li>
            <li>{{ $t('content.Accreditation.section_5_item_2') }}</li>
          </ul>
          <ul class="list-disc list-inside">
            <h5 class="font-bold">{{ $t('content.Accreditation.section_6_title') }}</h5>
            <li>{{ $t('content.content.Accreditation.section_6_item_1') }}</li>
            <li>{{ $t('content.Accreditation.section_6_item_2') }}</li>
          </ul>
        </div>
        <p>
          {{ $t('content.Accreditation.paragraph_2') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content.AccreditationPage'
}
</script>
