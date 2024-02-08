<template>
    <UiSection>
        <template #header>
            <div class="flex gap-x-[10px] items-center">
                <h2 class="text-xl">Sales</h2>
                <div class="flex w-6 h-6 justify-center items-center cursor-pointer">
                    <UiIcon icon="exclamation" />
                </div>
            </div>
        </template>

        <template #content>
            <canvas class="max-h-[500px]" id="salesChart"></canvas>
        </template>
    </UiSection>
</template>

<script setup>
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';

import UiSection from '@/components/UiSection.vue';
import UiIcon from '@/components/UiIcon.vue';

const labels = ['01 Apr', '02 Apr', '03 Apr', '04 Apr', '05 Apr', '06 Apr', '07 Apr'];

const data = {
    labels: labels,
    datasets: [{
        label: 'Sales',
        data: [80, 100, 80, 100, 120, 100, 120],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        x: {
            ticks: {
                font: {
                    size: 14,
                    weight: 600,
                },
            }
        },

        y: {
            min: 0,
            max: 240,
            ticks: {
                stepSize: 40,
                font: {
                    size: 14,
                    weight: 600,
                },
            },
        },
    },
};

const config = {
    type: 'line',
    data: data,
    options: options,
};

onMounted(() => {
    new Chart(
        document.getElementById('salesChart'),
        config,
    );
});
</script>

<style scoped></style>