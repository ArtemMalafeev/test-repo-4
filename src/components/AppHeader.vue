<template>
    <header class="py-4 px-4 bg-white border-b">
        <div class="flex justify-between items-center">
            <button class="flex w-6 h-6 justify-center items-center lg:hidden">
                <UiIcon icon="burger" />
            </button>

            <div class="hidden lg:flex lg:gap-x-8 lg:items-center">
                <AppLogo />

                <nav v-if="route.name !== 'dashboard'" class="flex gap-x-4">
                    <RouterLink class="text-sm text-gray-500 font-medium hover:text-green-500"
                        exact-active-class="text-green-500" :to="{ name: 'dashboard' }">
                        Dashboard
                    </RouterLink>
                    <RouterLink class="text-sm text-gray-500 font-medium hover:text-green-500" :to="{ name: 'notFound' }">
                        Team
                    </RouterLink>
                    <RouterLink class="text-sm text-gray-500 font-medium hover:text-green-500" :to="{ name: 'notFound' }">
                        Project
                    </RouterLink>
                    <RouterLink class="text-sm text-gray-500 font-medium hover:text-green-500" :to="{ name: 'notFound' }">
                        Calendar
                    </RouterLink>
                </nav>

                <div v-if="route.name === 'dashboard'"
                    class="hidden lg:flex min-w-[402px] items-center gap-x-[10px] px-[15px] py-[4px] border bg-gray-50 rounded-2xl">
                    <div>
                        <UiIcon icon="search" />
                    </div>
                    <input class="w-full outline-none placeholder:text-gray-500 text-gray-900 bg-transparent" type="text"
                        placeholder="Search">
                </div>
            </div>

            <!-- <div class="flex gap-x-[10px] items-center">
                <button class="flex w-6 h-6 justify-center items-center" type="button">
                    <UiIcon icon="notification" />
                </button>
                <button class="w-8 h-8 rounded-full bg-gray-200" type="button"></button>
            </div> -->

            <div class="flex gap-x-[10px] items-center">
                <button class="flex items-center gap-x-2" type="button">
                    <div class="flex items-center justify-center h-6 w-6">
                        <UiIcon icon="login" />
                    </div>
                    <p class="text-gray-500">Login/Register</p>
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>
import AppLogo from '@/components/AppLogo.vue';
import UiIcon from '@/components/UiIcon.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped></style>