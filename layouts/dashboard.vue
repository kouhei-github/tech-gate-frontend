<script setup lang="ts">

import Box from '~/components/Modal/Box.vue'

const isOpen = ref<boolean>(false)
const isShowPageShadow = (v: boolean) => {
  isOpen.value = v
}
</script>

<template>
    <div class="">
        <div v-if="isOpen" class="bg-black z-40 opacity-60 h-full w-full absolute top-0 left-0" />
        <div v-if="isOpen" class="absolute z-50 bottom-[30%] inset-x-[40%]">
            <Box @change-modal="isShowPageShadow" />
        </div>
        <div>
            <slot name="app-before" />
            <div class="w-full sticky top-0 bg-white z-30">
                <div class="w-[75%] mx-auto ">
                    <PageHeader :is-open="isOpen" @change-modal="isShowPageShadow" />
                </div>
            </div>

            <div class="w-full min-h-[85vh]">
                <slot />
                <div class="w-[75%] mx-auto">
                    <PageFooter />
                </div>
            </div>
        </div>
        <slot name="app-after" />
    </div>

</template>
