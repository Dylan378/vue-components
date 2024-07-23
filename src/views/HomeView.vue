<script setup>
  import { Toaster, toast } from 'vue-sonner'
</script>

<template>
  <div class="flex justify-center text-center ">
    <div class="mt-40">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Vue components</h1>
      <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here are some of the most common and practical components made in Vue + Tailwind. Just click on the buttons in the NavBar and see them working.</p>
      
      <Toaster richColors position="top-right" />
      
      <button @click="() => toast.success('My first toast')" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
          Click here to show a succes toaster
      </button>
    
    </div>
  </div>
</template>