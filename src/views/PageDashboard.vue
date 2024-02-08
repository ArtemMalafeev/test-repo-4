<template>
    <LayoutDashboard>
        <div class="flex flex-col gap-y-4">
            <SectionChart />
            <div class="flex flex-col gap-y-4 lg:grid lg:grid-cols-[380px_1fr] lg:gap-x-4">
                <SectionCustomers />
                <SectionProducts />
            </div>
            <SectionTransactions />
        </div>
    </LayoutDashboard>
</template>

<script setup>
import SectionProducts from '@/components/SectionProducts.vue';
import SectionCustomers from '@/components/SectionCustomers.vue';
import SectionTransactions from '@/components/SectionTransactions.vue';
import SectionChart from '@/components/SectionChart.vue';
import LayoutDashboard from '@/layouts/LayoutDashboard.vue';
</script>

<style scoped></style>