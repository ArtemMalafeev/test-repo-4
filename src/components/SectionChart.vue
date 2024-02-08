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
            <canvas id="chart" class="lg:max-h-[500px]"></canvas>
        </template>
    </UiSection>
</template>

<script setup>
import Chart from 'chart.js/auto';
import { onMounted, ref } from 'vue';

import UiSection from '@/components/UiSection.vue';
import UiIcon from '@/components/UiIcon.vue';

const chart = ref(null);
const labels = ['01 Apr', '02 Apr', '03 Apr', '04 Apr', '05 Apr', '06 Apr', '07 Apr'];

const data = {
    labels: labels,
    datasets: [{
        label: 'Sales',
        data: [80, 120, 70, 130, 90, 100, 170],
        fill: false,
        borderColor: '#0b9f6e',
        tension: 0.6,
    }]
};

const options = {
    responsive: true,
    interaction: {
        intersect: false,
        mode: 'index',
    },
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
                    weight: 500,
                },
            },
            grid: {
                display: false,
                tickLength: 15,
            },
            border: {
                display: false,
            },
        },

        y: {
            min: 0,
            max: 240,
            ticks: {
                stepSize: 40,
                font: {
                    size: 14,
                    weight: 500,
                },
                callback: function (value, index, ticks) {
                    return value + 'K';
                },
            },
            grid: {
                tickLength: 55,
            },
            border: {
                display: false,
            },
        },
    },
    elements: {
        point: {
            backgroundColor: '#ffffff',
            borderWidth: 2,
            borderColor: '#0b9f6e',
        },
    },
};

const config = {
    type: 'line',
    data: data,
    options: options,
};

onMounted(() => {
    chart.value = new Chart(
        document.getElementById('chart'),
        config,
    );
});

window.addEventListener('resize', () => {
    chart.value.resize();
});
</script>

<style scoped></style>