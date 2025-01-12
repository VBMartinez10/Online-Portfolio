<script setup>
  import ProjectDetails from '@/components/ProjectDetails.vue';
  import projectData from '@/projects.json';
  import { ref } from 'vue';

  const projects = ref(projectData);
  console.log(projects.value);
</script>

<template>
  <section class="grid grid-cols sm:grid-cols-2 row-auto justify-items-center p-4 xl:px-40 w-full h-fit bg-teal-100 gap-6">
    <ProjectDetails v-for="project in projects" :key="project.id" :project/>
  </section>
</template>

<style>

</style>
