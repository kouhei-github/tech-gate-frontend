<script setup lang="ts">

import {tags} from '~/models/tags'
const tags = ["JavaScript", "TypeScript", "React", "Vue.js", "Next.js", "Gatsby", "Nuxt.js", "Svelte", "HTML", "CSS", "Tailwind CSS", "Angular"]
</script>

<template>
  <div class="relative">
    <img class="h-[320px] w-full object-cover" src="/images/background-programming.webp" alt="ビギナー画像" />
    <div class="absolute top-0 h-[320px] bg-black w-full opacity-60" />
    <div class="absolute top-[18%] left-[26%] text-center text-white w-1/2 mx-auto">
      <h2 class="text-[32px]"><span class="text-[#4DABF7]">"フロントエンド"</span>に関する記事</h2>
      <div class="text-[16px] leading-8">
        <p>フロントエンド側の構成や設計に困ったらこちらの記事はチェックしてみましょう。</p>
        <p>よく使用される技術スタックや実装例が紹介されています。</p>
      </div>
      <div class="my-5 flex items-center justify-center space-x-3">
        <NuxtLink v-for="(tag, index) in tags.slice(0, 6)" :key="index" class="w-max" :to="`/categories/${tag}/`">
          <p class="text-center  bg-[#228BE6] text-white rounded-full text-[12px] px-2 py-1"># {{tag}}</p>
        </NuxtLink>
      </div>

      <div class="my-5 flex items-center justify-center space-x-3">
        <NuxtLink v-for="(tag, index) in tags.slice(6, 12)" :key="index" class="w-max" :to="`/categories/${tag}/`">
          <p class="text-center  bg-[#228BE6] text-white rounded-full text-[12px] px-2 py-1"># {{tag}}</p>
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>
