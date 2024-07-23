<script setup>
    import Dropdown from '@/components/Dropdown.vue'
</script>

<template>
    <body>
        <div class="flex flex-col items-center p-8">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Context menus</h1>

            <div class="mt-12">
                <div class="bg-gray-300 w-64 h-64 flex items-center justify-center rounded-md">
                    <Dropdown>
                        <template v-slot:trigger>
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Click me</button>
                        </template>

                        <li class="">
                            <a href="#" class="pl-2 pr-10 text-xs text-gray-200 hover:bg-gray-400 leading-loose">Edit</a>
                        </li>
                        <li class="">
                            <a href="#" class="pl-2 pr-10 text-xs text-gray-200 hover:bg-gray-400 leading-loose">Delete</a>
                        </li>
                        <li class="">
                            <a href="#" class="pl-2 pr-10 text-xs text-gray-200 hover:bg-gray-400 leading-loose">Report</a>
                        </li>
                    </Dropdown>
                </div>
            </div>
        </div>
    </body>
</template>