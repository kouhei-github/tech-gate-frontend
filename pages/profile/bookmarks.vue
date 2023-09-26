<script setup lang="ts">
import UserProfileTop from '~/components/Profile/UserProfileTop.vue'
import {getLatestArticle, getUserBookMarked, Post} from '~/models/article'

definePageMeta({
  layout: 'dashboard',
})



const route = useRoute()
const currentPage = ref<number>(typeof route.query["page"] === "undefined" ? 1 : Number(route.query["page"]))

watch(() => route.query, async (newValue, oldValue) => {
  // 現在のページを更新
  currentPage.value = typeof newValue["page"] === "undefined" ? 1 : Number(newValue["page"])
  console.log(currentPage.value )
  // エンドポイント叩いて記事を更新する
  articles.value = await getUserBookMarked({page: currentPage.value})

})

const articles = ref<Post[]>([])
onMounted(async () => {
  articles.value = await getUserBookMarked({page: currentPage.value})
})

</script>

<template>
    <div class="w-[930px] mx-auto my-4">
        <UserProfileTop />

        <div class="my-6">
            <HeadTagSubTitle title="ブックマーク中の記事" sub-title="ブックマーク中の記事を見る" path="/articles/all" />
        </div>

        <div class="grid grid-cols-2 space-x-4">
            <div v-for="(recommendImage, index) in articles" :key="index">
                <CardNormal :recommend-image="recommendImage" />
            </div>
        </div>
        <div class="flex justify-center w-full mb-7">
            <PageNation :current-page="currentPage" :total-page="Math.ceil(articles.length / 8)" />
        </div>
    </div>
</template>

<style scoped>

</style>
