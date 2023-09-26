<script setup lang="ts">
import TopPageView from '~/components/FirstView/TopPageView.vue'
import {getLatestArticle, Post} from '~/models/article'

definePageMeta({
  layout: 'dashboard',
  middleware: ['auth'],
})


const newArticles = ref<Post[]>([])
onMounted(async () => {
  newArticles.value = await getLatestArticle({page: 1})
})

const router = useRouter()
</script>
<template>
  <div class="w-full">
  <TopPageView />
  <div class="w-[930px] mx-auto mb-9">
      <div class="mb-8">
        <TagsBasic />
      </div>

      <div @click="router.push('categories')" class="cursor-pointer w-full text-center border-y py-2 font-[600]">
        すべてのカテゴリを見る
      </div>

      <div class="my-6">
        <HeadTagSubTitle title="急上昇中の記事" sub-title="すべての記事を見る" path="/articles/all" />
      </div>

      <CardRecommend :recommend-images="newArticles.slice(-2)" />
      <div class="grid grid-cols-2 space-x-4">
        <div v-for="(recommendImage, index) in newArticles.slice(0, 8)" :key="index">
          <CardNormal :recommend-image="recommendImage" />
        </div>
      </div>
      <div @click="router.push('/articles/all')" class="cursor-pointer group text-center w-full border-y py-2 font-[600]">
          <NuxtLink to="/articles/all">
              <span class="text-[#3D91DC] group-hover:underline text-[14px]">すべての記事を見る</span>
          </NuxtLink>
      </div>

    </div>
  </div>
</template>
