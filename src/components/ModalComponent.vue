<script setup>
import {defineEmits } from 'vue';
    
    const emit = defineEmits(['close']);

    const closeModal = () => {
        emit('close');
    };

    const Alert = () => {
        alert('This is throwing an alert');
    };
</script>

<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
        <div class="relative bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <div>
                <a href="#" @click.prevent="closeModal" class="absolute top-3 right-3 text-gray-600 hover:text-red-500">&times;</a>
            </div>

            <slot></slot>
            
            <footer class="mt-4 space-x-4">
                <slot name="footer"></slot>
           </footer>
        </div>
    </div>
</template>