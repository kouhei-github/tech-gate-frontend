<!--
This is the script setup block for a Vue.js TypeScript component. It imports the UserProfileTop component, newArticles
data and Post type. It also defines page meta information for the layout.

The component defines a constant called `recommendImages` which is an array of posts that contains a series of objects.
Each object contains tags, a title, url, image, date, site (with name and image), comment, and good.

The `route` constant uses Vue's `useRoute()` helper method to get the current route.
We declare a reactive Vue Ref, `currentPage`, which holds the current page number.
If the "page" query parameter from the route is undefined, `currentPage` defaults to 1, otherwise, it's assigned the query value converted to a number.

There's a watcher to monitor for changes on the `route.query`.
When the query changes, `currentPage` is updated in the same way as its initial value assignment.

Finally, `articles` is a constant containing a multiple times concatenation of `newArticles`.
--->

<script setup lang="ts">
import UserProfileTop from '~/components/Profile/UserProfileTop.vue'
import {getLatestArticle, Post} from '~/models/article'

definePageMeta({
  layout: 'dashboard',
})

const route = useRoute()
const currentPage = ref<number>(typeof route.query["page"] === "undefined" ? 1 : Number(route.query["page"]))
watch(() => route.query, (newValue, oldValue) => {
    // 現在のページを更新
    currentPage.value = typeof newValue["page"] === "undefined" ? 1 : Number(newValue["page"])

    // エンドポイント叩いて記事を更新する
})

const articles = ref<Post[]>([])
onMounted(async () => {
  articles.value = await getLatestArticle({page: 1})
})
</script>

<template>
    <div class="w-[930px] mx-auto my-4">
        <UserProfileTop />

        <div class="my-6">
            <HeadTagSubTitle title="コメント中の記事" sub-title="コメント中の記事を見る" path="/articles/all" />
        </div>

        <div class="grid grid-cols-2 space-x-4">
            <div v-for="(recommendImage, index) in articles.slice(0, 8)" :key="index">
                <CardNormal :recommend-image="recommendImage" />
            </div>
        </div>
        <div class="flex justify-center w-full mb-7">
            <PageNation :current-page="currentPage" :total-page="Math.ceil(articles.length / 6)" />
        </div>
    </div>
</template>

<style scoped>

</style>
