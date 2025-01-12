<script setup>
   import { defineProps } from 'vue';
   import holder from '@/assets/placeholder.png'
   defineProps({
      project:Object
   });
</script>

<template>
   <div class="group grid grid-flow-row p-2 md:p-2 bg-teal-50 hover:bg-teal-900 shadow-md h-fit w-4/5 rounded-xl items-center">
      <!-- Project Iframe  -->
      <iframe v-bind:src="project.link" class="m-0 w-full h-52" frameborder="0" scrolling="no"></iframe>
      <a v-bind:href="project.link" target="_blank">
         <div class="w-full p-2 space-y-1">
            <!-- project title  -->
            <p class="text-2xl font-semibold text-teal-900 group-hover:text-teal-50">{{ project.title }}</p>
            <!-- project type  -->
            <p class="italic text-lg group-hover:text-teal-50">{{project.type}}</p>
            <!-- project stack?  -->
            <p class="text-base group-hover:text-teal-50">{{project.stack}}</p>
         </div>
      </a>
   </div>
</template>