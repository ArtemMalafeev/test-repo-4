<template>
    <footer class="bg-white rounded-2xl">
        <div class="flex flex-col gap-y-8 px-8 pt-12 py-6 lg:flex-row lg:px-8 lg:py-12 lg:justify-between lg:items-center">
            <p class="text-gray-500">© 2021 Themesberg, LLC. All rights reserved.</p>
            <ul class="flex gap-x-6 h-6">
                <li class="w-6 h-6">
                    <a class="flex w-full h-full justify-center items-center" href="#">
                        <UiIcon icon="facebook" />
                    </a>
                </li>
                <li class="w-6 h-6">
                    <a class="flex w-full h-full justify-center items-center" href="#">
                        <UiIcon icon="twitter" />
                    </a>
                </li>
                <li class="w-6 h-6">
                    <a class="flex w-full h-full justify-center items-center" href="#">
                        <UiIcon icon="github" />
                    </a>
                </li>
                <li class="w-6 h-6">
                    <a class="flex w-full h-full justify-center items-center" href="#">
                        <UiIcon icon="dribbble" />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script setup>
import UiIcon from '@/components//UiIcon.vue';
</script>

<style scoped></style>