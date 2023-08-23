<script setup lang="ts">
import {tags} from '~/models/tags'
</script>

<template>
    <div class=" mx-auto text-center">
        <HeadTagSubTitle title="人気のカテゴリ" sub-title="全てのカテゴリを見る" path="/categories" />

        <div class="mb-4">
            <div class="flex items-center justify-around mb-6">
                <NuxtLink v-for="(tag, index) in tags.slice(0, 3)" :key="index"  class="w-full hover:scale-125 hover:shadow-lg hover:shadow-gray-200 ease-out duration-300" :to="`/categories/${tag.name}/`">
                    <img :alt="tag.name" :src="tag.img"  class="w-[40px] mx-auto h-[40px]" />
                    <p class="text-[12px]">{{tag.name}}</p>
                </NuxtLink>
            </div>
            <div class="grid grid-cols-6 gap-6">
                <NuxtLink v-for="(tag, index) in tags.slice(3, 15)" :key="index" class="hover:scale-125 hover:shadow-lg hover:shadow-gray-200 ease-out duration-300" :to="`/categories/${tag.name}/`">
                    <img :alt="tag.name" :src="tag.img" class="w-[30px] mx-auto h-[30px]" />
                    <p class="text-[12px]">{{tag.name}}</p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
