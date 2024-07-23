<script setup>
import Modal from '@/components/ModalComponent.vue'
import { ref, watch } from 'vue'

    const ModalButton = () => {
        ModalOpen.value = ! ModalOpen.value;
    };

    const ModalOpen = ref(false);

    watch(ModalOpen, (ModalOpen) => {
        if (ModalOpen) {
            document.addEventListener('click', closeIfClickedOutside);
        }
    });

    const closeIfClickedOutside = (event) => {
        if(!event.target.closest('.modal')) {
            ModalOpen.value = false;
        }
    };

</script>

<template>
    <div class="flex flex-col items-center p-8">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Modal</h1>
        
        <div class="modal">
            <a href="#the-modal" @click.prevent="ModalButton" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Click me</a>
        </div>

        <Modal v-if="ModalOpen" name="the-modal" @close="ModalOpen = false">
            <h1 class="text-2xl font-bold dark:text-white">Leaving to soon?</h1>
            
            <p class="text-left rtl:text-right text-gray-500 dark:text-gray-400">
                A modal is a graphical control element that appears on top of a web page 
                to grab the user's attention and interact with them without navigating away 
                from the current page. It typically requires the user to interact with it 
            </p>        

            <template v-slot:footer>
                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Cancel</a>
                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Confirm cancelation</a>
            </template>
        </Modal>
    </div>
</template>
