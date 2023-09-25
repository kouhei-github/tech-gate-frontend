<script setup lang="ts">
import { Post, searchArticleByTagName} from '~/models/article'
import Normal from '~/components/Card/Normal.vue'
import {serachTagResponseMocData} from '~/service/mocs'

definePageMeta({
  layout: 'dashboard',
})


const route = useRoute()
const newArticles = ref<{data: Post[], search_tag_url: string, related_tags: {name: string, image: string}[]}>(serachTagResponseMocData())
const pageNation = ref<number>(1)
onMounted(async () => {
  newArticles.value = await searchArticleByTagName({
    slug: typeof route.params["slug"] === "string" ? route.params["slug"] : route.params["slug"][0],
    page: pageNation.value
  })
})

const technicalBlogs = reactive<{current: string}>({
  current: "新着記事",
})

const switchArticle = (displayType: string) => {
  console.log(displayType)
}

</script>

<template>
    <div class="w-full">
        <div class="flex items-center w-[930px] mx-auto py-12 space-x-8">
            <img class="h-[100px] w-[100px]" :src="newArticles.search_tag_url" alt="tag_image" />
            <p class="text-[24px] font-bold">"{{ route.params["slug"] }}"に関する記事</p>
        </div>

        <div id="related-tag" class="border p-12 w-[930px] mx-auto">
            <h4>関連するカテゴリ（{{newArticles.related_tags.length}}）</h4>
            <div class="grid grid-cols-9 gap-6" >
                <NuxtLink v-for="(tag, index) in newArticles.related_tags" :key="index" class="hover:scale-125 hover:shadow-lg hover:shadow-gray-200 ease-out duration-300 flex flex-col items-center justify-center" :to="`/categories/${tag.name}/`">
                    <img :alt="tag.name" :src="tag.image" class="w-[45px] mx-auto h-[45px]" />
                    <p class="text-[12px]">{{tag.name}}</p>
                </NuxtLink>
            </div>
        </div>

        <div class="flex items-center my-14 w-[930px] mx-auto">
            <p
                @click="switchArticle('新着記事')"
                class="font-[500] py-3 px-4 rounded cursor-pointer"
                :class="{'bg-[#228BE6] text-white': technicalBlogs.current==='新着記事', 'bg-[#F1F3F5] text-black': technicalBlogs.current!=='新着記事'}"
            >
                新着記事
            </p>
            <p
                @click="switchArticle('人気記事')"
                class="font-[500] py-3 px-4 rounded cursor-pointer"
                :class="{'bg-[#228BE6] text-white':  technicalBlogs.current==='人気記事', 'bg-[#F1F3F5] text-black':  technicalBlogs.current!=='人気記事'}"
            >
                人気記事
            </p>
        </div>

        <div class="grid grid-cols-2 w-[930px] mx-auto">
            <div v-for="(aritcle, index) in newArticles.data" :key="index">
                <Normal :recommend-image="aritcle" />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
