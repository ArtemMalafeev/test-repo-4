<template>
    <UiSection>
        <template #header>
            <h2 class="text-xl">Latest Customers</h2>
        </template>

        <template #content>
            <ul class="divide-y">
                <li v-for="customer in customers" :key="customer.id"
                    class="flex gap-x-4 justify-between items-center py-[9px]">
                    <div class="flex items-center gap-x-2">
                        <div class="w-8 h-8 rounded-full bg-gray-200"></div>
                        <div class="flex flex-col">
                            <p>{{ customer.name }}</p>
                            <p class="text-xs font-normal text-gray-500">{{ customer.email }}</p>
                        </div>
                    </div>
                    <p>{{ customer.value }}</p>
                </li>
            </ul>
        </template>
    </UiSection>
</template>

<script setup>
import UiSection from '@/components//UiSection.vue';

const customers = [
    { id: 1, name: 'Neil Sims', email: 'email@example.com', value: '$367' },
    { id: 2, name: 'Bonnie Green', email: 'email@example.com', value: '$67' },
    { id: 3, name: 'Micheal Gough', email: 'email@example.com', value: '$3467' },
    { id: 4, name: 'Thomas Lean', email: 'email@example.com', value: '$2367' },
    { id: 5, name: 'Lana Byrd', email: 'email@example.com', value: '$367' },
    { id: 5, name: 'Karen Nelson', email: 'email@example.com', value: '$1367' },
];
</script>

<style scoped></style>