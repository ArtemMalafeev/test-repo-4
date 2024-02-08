<template>
    <div class="flex flex-col">
        <AppHeader />
        <div class="lg:grid lg:grid-cols-[250px_1fr]">
            <AppSidebar class="hidden lg:flex" />
            <div class="flex flex-col gap-y-4 p-4 bg-slate-50">
                <main>
                    <slot></slot>
                </main>
                <AppFooter />
            </div>
        </div>
    </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppSidebar from '@/components/AppSidebar.vue';
</script>

<style scoped></style>