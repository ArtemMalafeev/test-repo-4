<template>
    <aside class="relative flex flex-col justify-between gap-y-12 py-4 bg-white text-gray-900 text-medium border-r">
        <div class="sticky top-0 flex-col divide-y">
            <ul class="flex flex-col gap-y-[22px] pt-4 pb-6 px-3">
                <li>
                    <RouterLink :to="{ name: 'dashboard' }" exact-active-class="text-green-500"
                        class="block py-1 px-2 rounded-xl hover:bg-gray-100">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-x-4">
                                <div class="w-6 h-6 flex items-center justify-center">
                                    <UiIcon icon="overview" />
                                </div>
                                <p>Overview</p>
                            </div>
                        </div>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'notFound' }" exact-active-class="text-green-500"
                        class="block py-1 px-2 rounded-xl hover:bg-gray-100">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-x-4">
                                <div class="w-6 h-6 flex items-center justify-center">
                                    <UiIcon icon="page" />
                                </div>
                                <p>Pages</p>
                            </div>
                            <button class="w-6 h-6 flex items-center justify-center" type="button">
                                <UiIcon icon="arrow" />
                            </button>
                        </div>
                    </RouterLink>
                </li>
                <li>
                    <div class="flex flex-col gap-y-[22px]">
                        <RouterLink :to="{ name: 'notFound' }" exact-active-class="text-green-500"
                            class="block py-1 px-2 rounded-xl hover:bg-gray-100">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center gap-x-4">
                                    <div class="w-6 h-6 flex items-center justify-center">
                                        <UiIcon icon="sales" />
                                    </div>
                                    <p>Sales</p>
                                </div>
                                <button class="w-6 h-6 flex items-center justify-center rotate-180" type="button">
                                    <UiIcon icon="arrow" />
                                </button>
                            </div>
                        </RouterLink>
                        <ul class="flex flex-col gap-y-[22px]">
                            <li>
                                <RouterLink :to="{ name: 'notFound' }" exact-active-class="text-green-500"
                                    class="block py-1 px-2 rounded-xl hover:bg-gray-100">
                                    <div class="flex justify-between items-center">
                                        <div class="flex items-center gap-x-4">
                                            <div class="w-6 h-6 flex items-center justify-center">
                                            </div>
                                            <p>Product List</p>
                                        </div>
                                    </div>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'notFound' }" exact-active-class="text-green-500"
                                    class="block py-1 px-2 rounded-xl hover:bg-gray-100">
                                    <div class="flex justify-between items-center">
                                        <div class="flex items-center gap-x-4">
                                            <div class="w-6 h-6 flex items-center justify-center">
                                            </div>
                                            <p>Billing</p>
                                        </div>
                                    </div>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'notFound' }" exact-active-class="text-green-500"
                                    class="block py-1 px-2 rounded-xl hover:bg-gray-100">
                                    <div class="flex justify-between items-center">
                                        <div class="flex items-center gap-x-4">
                                            <div class="w-6 h-6 flex items-center justify-center">
                                            </div>
                                            <p>Invoice</p>
                                        </div>
                                    </div>
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <RouterLink :to="{ name: 'notFound' }" exact-active-class="text-green-500"
                        class="block py-1 px-2 rounded-xl hover:bg-gray-100">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-x-4">
                                <div class="w-6 h-6 flex items-center justify-center">
                                    <UiIcon icon="messages" />
                                </div>
                                <p>Messages</p>
                            </div>
                        </div>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'notFound' }" exact-active-class="text-green-500"
                        class="block py-1 px-2 rounded-xl hover:bg-gray-100">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-x-4">
                                <div class="w-6 h-6 flex items-center justify-center">
                                    <UiIcon icon="authentication" />
                                </div>
                                <p>Authentication</p>
                            </div>
                        </div>
                    </RouterLink>
                </li>
            </ul>

            <ul class="flex flex-col gap-y-[22px] pt-4 pb-6 px-3">
                <li>
                    <RouterLink :to="{ name: 'notFound' }" exact-active-class="text-green-500"
                        class="block py-1 px-2 rounded-xl hover:bg-gray-100">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-x-4">
                                <div class="w-6 h-6 flex items-center justify-center">
                                    <UiIcon icon="docs" />
                                </div>
                                <p>Docs</p>
                            </div>
                        </div>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'notFound' }" exact-active-class="text-green-500"
                        class="block py-1 px-2 rounded-xl hover:bg-gray-100">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-x-4">
                                <div class="w-6 h-6 flex items-center justify-center">
                                    <UiIcon icon="components" />
                                </div>
                                <p>Components</p>
                            </div>
                        </div>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'notFound' }" exact-active-class="text-green-500"
                        class="block py-1 px-2 rounded-xl hover:bg-gray-100">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-x-4">
                                <div class="w-6 h-6 flex items-center justify-center">
                                    <UiIcon icon="help" />
                                </div>
                                <p>Help</p>
                            </div>
                        </div>
                    </RouterLink>
                </li>
            </ul>
        </div>

        <div class="flex justify-center items-center gap-x-[22px]">
            <button class="w-6 h-6 flex items-center justify-center" type="button">
                <UiIcon icon="adjustments" />
            </button>
            <button class="w-6 h-6 flex items-center justify-center" type="button">
                <UiIcon icon="globe" />
            </button>
            <button class="w-6 h-6 flex items-center justify-center" type="button">
                <UiIcon icon="settings" />
            </button>
        </div>
    </aside>
</template>

<script setup>
import UiIcon from './UiIcon.vue';
</script>

<style scoped></style>