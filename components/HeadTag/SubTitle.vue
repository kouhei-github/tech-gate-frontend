<script setup lang="ts">
const props = defineProps<{title: string, subTitle: string, path: string}>();

</script>

<template>
    <div class="flex items-center justify-between mb-4">
        <p class="text-[14px] font-bold">{{props.title}}</p>
        <NuxtLink :to="props.path">
            <span class="text-[#3D91DC] hover:underline text-[14px]">{{props.subTitle}}</span>
        </NuxtLink>
    </div>
</template>

<style scoped>

</style>
