<script setup>
import ScrollLink from '@/components/ScrollLink.vue'
</script>

<template>
    <body id="up">
        <div class="p-8">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Smooth Scroling</h1>
            
            <scroll-link href="#categories" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">Go to categories</scroll-link>

            <div class="h-screen"></div>

            <div id="categories">
                <h2 class="font-bold mb-6">
                    Categories
                </h2>

                <div class="flex gap-6">
                    <scroll-link href="#up" class="w-1/3 h-48 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900">Go back up</scroll-link>
                    <button class="w-1/3 h-48 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-900">Item</button>
                    <button class="w-1/3 h-48 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900">Item</button>
                </div>
            </div>
        </div>
    </body>
</template>