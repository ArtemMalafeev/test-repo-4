<template>
    <UiSection>
        <template #header>
            <div class="flex flex-col">
                <h2 class="text-xl">Transactions</h2>
                <h3 class="text-sm font-normal text-gray-500">This is a list of latest transactions.</h3>
            </div>
        </template>

        <template #content>
            <div class="overflow-x-auto">
                <table class="w-full min-w-[700px]">
                    <thead class="text-xs text-left text-gray-500 uppercase border-b">
                        <tr>
                            <th v-for="header in tableHeaders" :key="header.id"
                                class="p-4 bg-gray-50 first:rounded-tl-md last:rounded-tr-md">
                                {{ header.name }}
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-xs lg:text-sm">
                        <tr v-for="transaction in transactions" class="od:bg-white even:bg-gray-50">
                            <td class="p-4">
                                <span class="font-normal">Payment from</span>
                                {{ transaction.name }}
                            </td>
                            <td class="p-4 font-normal text-gray-500">
                                {{ transaction.date }}
                            </td>
                            <td class="p-4">
                                {{ transaction.amount }}
                            </td>
                            <td class="p-4">
                                <span :class="statusOptions[transaction.status].classes"
                                    class="inline-block py-[2px] px-[10px] rounded-[10px] font-normal">
                                    {{ statusOptions[transaction.status].name }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </template>
    </UiSection>
</template>

<script setup>
import UiSection from '@/components/UiSection.vue';

const transactions = [
    { id: 1, name: 'Bonnie Green', date: 'Apr 23, 2021', amount: '$2300', status: 1 },
    { id: 2, name: '#00910', date: 'Apr 23, 2021', amount: '-$670', status: 1 },
    { id: 3, name: '#087651', date: 'Apr 18, 2021', amount: '$234', status: 3 },
    { id: 4, name: 'Bonnie Green', date: 'Apr 15, 2021', amount: '$5000', status: 2 },
    { id: 5, name: 'Jese Leos', date: 'Apr 15, 2021', amount: '$2300', status: 2 },
    { id: 6, name: 'THEMSBERG LLC', date: 'Apr 11, 2021', amount: '$280', status: 1 },
];

const tableHeaders = [
    { id: 1, name: 'Transaction' },
    { id: 2, name: 'Date & time' },
    { id: 3, name: 'Amount' },
    { id: 4, name: 'Status' },
];

const statusOptions = {
    1: {
        name: 'Completed',
        classes: ['bg-green-100 text-green-800'],
    },
    2: {
        name: 'In progress',
        classes: ['bg-blue-100 text-blue-800'],
    },
    3: {
        name: 'Cancelled',
        classes: ['bg-red-200 text-red-800'],
    },
};
</script>

<style scoped></style>