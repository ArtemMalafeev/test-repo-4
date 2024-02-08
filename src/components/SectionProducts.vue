<template>
    <UiSection>
        <template #header>
            <h2 class="text-xl">Top products</h2>
        </template>

        <template #content>
            <ul class="divide-y">
                <li v-for="product in products" :key="product.id"
                    class="flex gap-x-4 justify-between items-center py-[9px]">
                    <div class="flex items-center gap-x-2">
                        <div class="flex flex-col">
                            <p>{{ product.name }}</p>
                            <p class="text-xs font-normal text-gray-500">{{ product.tools }}</p>
                        </div>
                    </div>
                    <p class="flex gap-x-1">
                        {{ product.value }}
                        <span class="font-normal text-gray-600">sales</span>
                    </p>
                </li>
            </ul>
        </template>
    </UiSection>
</template>

<script setup>
import UiSection from '@/components/UiSection.vue';

const products = [
    { id: 1, name: 'Restaurant Booking App', tools: 'React & Bootstrap Framework', value: 70 },
    { id: 2, name: 'UI Kit', tools: 'React & Bootstrap Framework', value: 54 },
    { id: 3, name: 'Design System Pro', tools: 'Bootstrap Framework', value: 47 },
    { id: 4, name: 'Dashboard', tools: 'Tailwind, React', value: 43 },
    { id: 5, name: 'Glassmorphism UI', tools: 'Vue Js, Tailwind', value: 38 },
    { id: 6, name: 'Multipurpose Template', tools: 'React & Bootstrap Framework', value: 22 },
];
</script>

<style scoped></style>