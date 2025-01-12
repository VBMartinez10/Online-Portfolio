<script setup>
  import Img from '@/components/Img.vue'
  import Skills from '@/components/Skills.vue'
  import Contacts from '@/components/Contacts.vue'
  import Summary from '@/components/Summary.vue'
  import Education from '@/components/Education.vue'
</script>

<template>
  <section class="flex flex-col md:flex-row-reverse p-4 md:px-10 w-full h-fit bg-teal-100 gap-4">
    <div class="md:w-2/5 items-center justify-items-center">
      <Img />
      <Contacts />
    </div>
    <div class="md:w-3/5 space-y-1">
      <Summary />
      <Skills />
      <Education />
    </div>
  </section>
</template>

<style>

</style>
