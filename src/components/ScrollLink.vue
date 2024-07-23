<script setup>
    const props = defineProps(['href'])

    const scroll = () => {
        document.querySelector(props.href).scrollIntoView({ behavior: 'smooth' });
    };
</script>

<template>
    <a :href="href" @click.prevent="scroll">
        <slot></slot>
    </a>
</template>