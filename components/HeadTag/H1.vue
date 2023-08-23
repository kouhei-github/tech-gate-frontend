<script setup lang="ts">

const props = defineProps<{text: string}>();


</script>

<template>
    <h1 class="text-center text-3xl font-bold max-sm:text-xl my-12">{{ props.text }}</h1>
</template>

<style scoped>

</style>
