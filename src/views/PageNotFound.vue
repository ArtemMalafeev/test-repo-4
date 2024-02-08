<template>
    <LayoutDefault>
        <div class="flex flex-col justify-center items-center w-full h-full bg-gray-50  px-4">
            <div class="flex flex-col">
                <div>
                    <img class="w-full h-full object-cover" src="@/assets/images/404.png" alt="Ошибка">
                </div>
                <div class="flex flex-col gap-y-[22px]">
                    <div class="flex flex-col gap-y-[10px] text-center">
                        <h1 class="text-5xl text-gray-900 font-bold">Page not found</h1>
                        <p class="text-gray-500">Oops! Looks like you followed a bad link. If you think this is a problem
                            with
                            us,
                            please tell us.</p>
                    </div>
                    <RouterLink
                        class="m-auto w-max py-[9px] px-[17px] rounded-xl bg-green-500 hover:bg-green-700 text-white text-semibold"
                        :to="{ name: 'dashboard' }">
                        Go back home
                    </RouterLink>
                </div>
            </div>
        </div>
    </LayoutDefault>
</template>

<script setup>
import LayoutDefault from '@/layouts/LayoutDefault.vue';
</script>

<style scoped></style>