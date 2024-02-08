<template>
    <section class="flex flex-col gap-y-4 w-full h-full p-6 rounded-2xl shadow text-gray-900 font-semibold bg-white">
        <header>
            <slot name="header"></slot>
        </header>
        <div>
            <slot name="content"></slot>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped></style>