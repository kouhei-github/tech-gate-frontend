<script setup lang="ts">
import {Post} from '~/pages/classification/beginner.vue'

const props = defineProps<{recommendImage: Post}>();
const recommendImage = props.recommendImage
const mark = () => {
    console.log("mark")
}

const comment = () => {
    console.log("comment")
}

const good = () => {
    console.log("good")
}

const router = useRouter()

const moveToOtherSite = (page: string) => {
    window.open(page, '_blank')
}

const moveTo = (page: string) => {
    router.push(page)
}

</script>

<template>
  <div class="flex items-start h-[180px] w-full">
    <div @click="moveToOtherSite(recommendImage.url)" class="cursor-pointer hover:bg-[#F2F2F2] w-[450px] mx-auto p-[15px]">
      <div class="space-x-2 my-1 text-[#B6BBC1] font-[700] text-[12px] flex items-center " >
        <span v-for="(tag, idx) in recommendImage.tags" :key="idx" @click.stop="moveTo(tag.url)" class="hover:underline" :to="tag.url">#{{tag.name}}</span>
      </div>
      <div class="flex items-start">
        <h3 class="text-sm font-bold text-black hover:underline hover:underline-offset-1 hover:decoration-black">
            {{ recommendImage.title }}
        </h3>
        <img class="w-[150px] h-[80px]" :src="recommendImage.image"  />
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start space-x-3">
          <img class="w-5 h-5" :src="recommendImage.site.image" />
          <span class="text-[12px]">{{recommendImage.site.name}}</span>
          <span class="text-[13px] text-[#9BA1A8]">{{recommendImage.date}}</span>
        </div>

        <div class="flex items-center justify-center space-x-2 z-20" @click.stop="mark()">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#B6BBC0] hover:bg-white" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path></svg>

          <div class="flex items-center justify-center" @click.stop="comment()">
            <svg class="w-5 h-5 text-[#B6BBC0] hover:bg-white" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1"></path></svg>
            <span class="text-[#B6BBC0] ml-1">{{recommendImage.comment}}</span>
          </div>

          <div class="flex items-center justify-center" @click.stop="good()">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#B6BBC0] hover:bg-white" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path></svg>
            <span class="text-[#B6BBC0] ml-1">{{recommendImage.good}}</span>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>
