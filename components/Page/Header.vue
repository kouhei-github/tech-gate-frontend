<script lang="ts" setup>

import {useJwtTokenStore} from '~/stores/jwt_token'
import {useUserProfileStore} from '~/stores/user_profile'
import UserProfile from '~/components/Card/UserProfile.vue'

type Props = {
  isOpen: boolean
}
const props = defineProps<Props>()

interface Emits {
  // 関数名, 引数の型, 返り値の型
  (e: 'changeModal', v: boolean): void;
}

const emits = defineEmits<Emits>();

type pageNation = {
  name: string,
  path: string
}

const subPages: pageNation[] = [
  {name: "個人開発の基本", path: "/classification/beginner"},
  {name: "アイデア", path: "/classification/idea"},
  {name: "デザイン", path: "/classification/design"},
  {name: "インフラ・アーキテクチャ", path: "/classification/architecture"},
  {name: "バックエンド", path: "/classification/backend"},
  {name: "フロントエンド", path: "/classification/frontend"},
  {name: "リリース・運用", path: "/classification/release"}
]

const route = useRoute()

// jwtトークンを取得すルためにストアにアクセス
const jwtTokenStore = useJwtTokenStore()
</script>

<template>
  <div class="w-full space-y-5 h-[16vh] border-b border-[#E9ECEF]">
    <div class="flex items-center justify-between">
      <NuxtLink to="/">
        <div class="w-1/2 flex items-center">
          <img alt="ロゴ" src="/images/download.webp" class="w-[190px] h-[80px]" />
          <p class="tracking-[0.5em] text-lg ml-5">TechGate</p>
        </div>
      </NuxtLink>

      <div class="space-x-3 flex items-center justify-center">
        <NuxtLink to="/categories">
          <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="10" cy="10" r="7"></circle><line x1="21" y1="21" x2="15" y2="15"></line></svg>
        </NuxtLink>
        <div v-if="jwtTokenStore.jwtToken === ''">
          <div @click="emits('changeModal', !props.isOpen)">
            <div class="bg-[#228BE6] text-white px-[15px] py-[2px] rounded-full text-[14px] cursor-pointer">ログイン</div>
          </div>
        </div>
        <div v-else>
          <UserProfile />
        </div>
      </div>
    </div>
    <div class="flex justify-around w-11/12 mx-auto">
      <NuxtLink
          v-for="(subPage, index) in subPages"
          v-bind:to="subPage.path"
          class="px-[13px] py-[6px] text-[14px] rounded-md"
          :class="route.path === subPage.path ? 'bg-[#228BE6] text-white' : ''"
          :key="index"
      >
        {{subPage.name}}
      </NuxtLink>
    </div>
  </div>
</template>
