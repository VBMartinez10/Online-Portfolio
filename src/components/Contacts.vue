<script setup>

</script>

<template>
   <section class="mt-2 p-2 space-y-2 w-full bg-gray-100 shadow-sm">
      <h4 class="text-base text-left italic">Contact me here</h4>
      <div class="justify-self-center space-x-2 md:space-x-7">   
         <!-- Email/Gmail -->
         <a href="mailto:vb.martinez4102@gmail.com" class="cursor-pointer" title="Gmail">         
            <font-awesome-icon :icon="['fas', 'envelope']" class="size-8 md:size-11 text-teal-900 transform transition-transform duration-300 hover:scale-150" />
         </a>

         <!-- Github  -->
         <a href="https://github.com/VBMartinez10" target="_blank" class="cursor-pointer" title="Github">
            <font-awesome-icon :icon="['fab', 'github']" class="size-8 md:size-11 text-teal-900 transform transition-transform duration-300 hover:scale-150" />
         </a>

         <!-- LinkIn  -->
         <a href="https://www.linkedin.com/in/vbdmartinez/" target="_blank" class="cursor-pointer" title="LinkedIn">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="size-8 md:size-11 text-teal-900 transform transition-transform duration-300 hover:scale-150" />
         </a>
      </div>
   </section>
</template>