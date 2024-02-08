<template>
    <div class="grid grid-rows-[min-content_1fr] min-h-screen">
        <AppHeader />
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
</script>

<style scoped></style>