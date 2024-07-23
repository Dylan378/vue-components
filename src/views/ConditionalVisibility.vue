<script setup>
import Visible from '@/components/Visible.vue'
</script>

<template>
    <div class="p-8">
        <div class="flex rounded-md flex-col items-center bg-gray-300 p-4 w-full" style="height: 1500px">
        
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Conditional visibility</h1>
            <a id="new-post-link" href="#" class="text-white w-fit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create a post</a>
            
            <p class="tracking-tighter text-gray-500 font-semibold md:text-lg dark:text-gray-400 mt-8">Scroll down to see something cool.</p>
            <Visible when-hidden="#new-post-link">
                <div class="flex items-center w-full justify-center">
                    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 fixed z-10 mb-4 bottom-0">Create a post</button>
                </div>
            </Visible>
        </div>
    </div>
</template>