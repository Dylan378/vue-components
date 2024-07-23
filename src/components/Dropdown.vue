<script setup>
import { ref, watch } from 'vue';

    const isOpen = ref(false);

    watch(isOpen, (isOpen) => {
        if (isOpen) {
            document.addEventListener('click', closeIfClicked);
        }
    });

    const closeIfClicked = (event) => {
        if(!event.target.closest('.dropdown')) {
            isOpen.value = false;
        }
    };

</script>

<template>
    <div class="dropdown">
        <div class="dropdown-trigger" @click.prevent="isOpen = ! isOpen">
            <slot name="trigger"></slot>
        </div>

        <transition name="pop-out-quick">
            <ul v-show="isOpen" class="absolute bg-gray-800 rounded-lg shadow z-10 py-2">
                <slot></slot>
            </ul>
        </transition>
    </div>
</template>

<style>
    .pop-out-quick-enter-active,
    .pop-out-quick-leave-active {
        transition: all 0.8s;
    }

    .pop-out-quick-enter-from,
    .pop-out-quick-leave-to {
        opacity: 0;
        transform: translateY(-8px);
        /* scale: 75% */
    }
</style>