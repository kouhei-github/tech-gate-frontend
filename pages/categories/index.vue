<script setup lang="ts">
import {tags} from '~/models/tags'

definePageMeta({
  layout: 'dashboard',
})

const search = ref<string>("")
const searchTags = computed(() => {
  const result: {img: string, name: string}[] = []
  tags.map((tag) => {
    if(tag.name.toUpperCase().includes(search.value.toUpperCase())) result.push(tag)
  })
  return result
})
</script>

<template>
  <div class="w-[65%] mx-auto overflow-y-scroll">
    <div class="relative">
      <input v-model="search" type="text" class="w-full border rounded-full my-5 py-1 px-8" />
      <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-7 left-2" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="10" cy="10" r="7"></circle><line x1="21" y1="21" x2="15" y2="15"></line></svg>
    </div>

    <div class="grid grid-cols-6 gap-6 my-8" v-if="search === ''">
      <NuxtLink v-for="(tag, index) in tags" :key="index" class="hover:scale-125 hover:shadow-lg hover:shadow-gray-200 ease-out duration-300 flex flex-col items-center justify-center" :to="`/categories/${tag.name}/`">
        <img :alt="tag.name" :src="tag.img" class="w-[45px] mx-auto h-[45px]" />
        <p class="text-[12px]">{{tag.name}}</p>
      </NuxtLink>
    </div>
    <div class="grid grid-cols-6 gap-6 my-8" v-else>
      <NuxtLink v-for="(tag, index) in searchTags" :key="index" class="hover:scale-125 hover:shadow-lg hover:shadow-gray-200 ease-out duration-300 flex flex-col items-center justify-center" :to="`/categories/${tag.name}/`">
        <img :alt="tag.name" :src="tag.img" class="w-[45px] mx-auto h-[45px]" />
        <p class="text-[12px]">{{tag.name}}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>
