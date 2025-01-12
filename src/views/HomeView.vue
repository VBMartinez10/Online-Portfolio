<script setup>
  import Bg from '@/assets/img/bg.jpg'
  import Tech from '@/components/Tech.vue';
  import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="bg-teal-100 bg-center px-14 py-24 md:py-36 md:p-44 h-full" :style="{backgroundImage: `url(${Bg})`}">
    <div class="max-w-7xl mx-auto sm:justify-items-center space-y-5 font-medium tracking-wider md:text-center">
      <p class="text-5xl md:text-5xl lg:text-7xl">Hi! I am 
        <RouterLink to="/about">
          <span class="cursor-pointer text-teal-800 hover:font-Tourney">Vincent</span>
        </RouterLink></p>
      <p class="text-2xl md:text-3xl">I'm a <span class="font-Jersey text-5xl md:text-6xl lg:text-7xl">Web Developer</span></p>
      <Tech /> 
    </div>
  </section>
</template>


