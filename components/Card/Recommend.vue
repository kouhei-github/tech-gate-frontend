<script setup lang="ts">

import {Post, postUserBookMarked, postUserLiked} from '~/models/article'

const props = defineProps<{recommendImages: Post[]}>();

const mark = async (id: number) => {
  await postUserBookMarked({articleId: id})
}

const comment = (id: number) => {
  console.log("comment"+ String(id))
}

const good = async (id: number) => {
  await postUserLiked({articleId: id})
}

const router = useRouter()

const moveToOtherSite = (page: string) => {
  window.open(page, '_blank')
}

const moveTo = (page: string) => {
  router.push(`/categories/${page}`)
}

</script>

<template>
  <div id="recommends" class="flex items-start justify-center">
    <div v-for="(recommendImage, index) in props.recommendImages" @click="moveToOtherSite(recommendImage.url)"  :key="index" class="cursor-pointer hover:bg-[#F2F2F2] w-[450px] mx-auto p-[15px]">
      <img class="w-[450px] h-[215px]" :src="recommendImage.image"  />
      <div class="space-x-2 my-1 text-[#B6BBC1] font-[700] text-[12px] flex items-center " >
        <span v-for="(tag, idx) in recommendImage.tags" :key="idx" @click.stop="moveTo(tag.name)" class="hover:underline">#{{tag.name}}</span>
      </div>
      <h3 class="font-bold h-[78px] my-4 leading-[1.6em] text-black text-[16px] hover:underline hover:underline-offset-1 hover:decoration-black">
        {{ recommendImage.title }}
      </h3>
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start space-x-3">
          <img class="w-5 h-5" :src="recommendImage.site.image" />
          <span class="text-[12px]">{{recommendImage.site.name}}</span>
          <span class="text-[13px] text-[#9BA1A8]">{{recommendImage.date}}</span>
        </div>
        <div class="flex items-center justify-center space-x-2 z-20" @click.stop="mark(recommendImage.id)">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#B6BBC0] hover:bg-white" :class="{'text-[#3595E8]': recommendImage.book_marked}" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path></svg>
          <span class="text-[#B6BBC0] ml-1">{{recommendImage.book_marked_num}}</span>
        </div>
        <div class="flex items-center justify-center" @click.stop="comment(recommendImage.id)">
          <svg class="w-5 h-5 text-[#B6BBC0] hover:bg-white" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1"></path></svg>
          <span class="text-[#B6BBC0] ml-1">{{recommendImage.comment_num}}</span>
        </div>
        <div class="flex items-center justify-center" @click.stop="good(recommendImage.id)">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#B6BBC0] hover:bg-white" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path></svg>
          <span class="text-[#B6BBC0] ml-1">{{recommendImage.good_num}}</span>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>

</style>
