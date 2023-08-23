<script setup lang="ts">
import TopPageView from '~/components/FirstView/TopPageView.vue'
import Normal from "~/components/Card/Normal.vue";
import {recommendRanker, recommendNotRanker, newArticles} from "~/models/sample";
import H1 from "~/components/HeadTag/H1.vue";
import BigginerTopView from "~/components/FirstView/BigginerTopView.vue";
import IdeaTopView from '~/components/FirstView/IdeaTopView.vue'
import ArchitectureTopView from '~/components/FirstView/ArchitectureTopView.vue'

definePageMeta({
  layout: 'dashboard',
})

type path = {
  name: string
  url: string
}

export type Post = {
  image: string
  url: string
  title: string
  tags: path[]
  date: string
  site: {image: string, name: string}
  comment: number
  good: number
}

const technicalBlogs = reactive<{current: string, articles: Post[]}>({
  current: "新着",
  articles: newArticles
})

const recommendImages: Post[] = recommendRanker
const recommendsPostSmalls: Post[] = recommendNotRanker

const head = {
  recommend: "おすすめの記事",
  article: "すべての記事（33記事)"
}

const switchArticle = (displayType: string) => {
  switch (displayType) {
    case "人気":
      technicalBlogs.current = displayType
      technicalBlogs.articles = newArticles.filter((article) => article.title.indexOf("新規") !== -1)
      return
    case "新着":
      technicalBlogs.current = displayType
      technicalBlogs.articles = newArticles
      return
    default:
      technicalBlogs.current = displayType
      technicalBlogs.articles = newArticles
  }
}

// 残りの記事数
let count = 0
const limited = ref(newArticles.length)
const addPost = () => {
  let include = count+3
  if(include > newArticles.length){
    include = newArticles.length
  }
  for(const article of technicalBlogs.articles.slice(count, include)){
    technicalBlogs.articles.push(article)
  }
  count = count + 3
  limited.value = limited.value - 3
  if(limited.value < 0){
    limited.value = 0
  }

}
</script>
<template>
  <div class="w-full">
    <ArchitectureTopView />
    <div class="w-[75%] mx-auto">
      <H1 :text="head.recommend" />
      <div class=" w-[930px] mx-auto">
        <CardRecommend :recommend-images="recommendImages" />

        <div class="grid grid-cols-2 ">
          <div v-for="(recommendImage, index) in recommendsPostSmalls" :key="index">
            <Normal :recommend-image="recommendImage" />
          </div>
        </div>
      </div>

      <H1 :text="head.article" />

      <div class="flex items-center justify-center mb-12">
        <p
            @click="switchArticle('新着')"
            class="font-[500] py-3 px-4 rounded cursor-pointer"
            :class="{'bg-[#228BE6] text-white': technicalBlogs.current==='新着', 'bg-[#F1F3F5] text-black': technicalBlogs.current!=='新着'}"
        >
          新着
        </p>
        <p
            @click="switchArticle('人気')"
            class="font-[500] py-3 px-4 rounded cursor-pointer"
            :class="{'bg-[#228BE6] text-white':  technicalBlogs.current==='人気', 'bg-[#F1F3F5] text-black':  technicalBlogs.current!=='人気'}"
        >
          人気
        </p>
      </div>

      <div class="grid grid-cols-2 w-[930px] mx-auto">
        <div v-for="(aritcle, index) in  technicalBlogs.articles" :key="index">
          <Normal :recommend-image="aritcle" />
        </div>
      </div>
    </div>
    <div @click="addPost()" class="bg-[#228BE6] text-white w-max mx-auto px-3 py-2 rounded cursor-pointer">もっと見る(あと{{limited}}記事)</div>
  </div>
</template>
