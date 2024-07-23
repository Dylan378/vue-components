<script setup>
import { onMounted, ref } from 'vue';

    const shouldDisplay = ref(false);

    const props = defineProps({
        whenHidden: {
            type: String,
        }
    });

    const inViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.y >= 0 
        );
    };

    onMounted(() => {
        const checkVisibility = () => {
            shouldDisplay.value = !inViewport(document.querySelector(props.whenHidden));
        };
        window.addEventListener('scroll', checkVisibility, { passive: true }); 
    });
</script>

<template>
    <transition name="fade">
        <div v-show="shouldDisplay">
            <slot></slot>
        </div>  
    </transition>
</template> 

<style>
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>