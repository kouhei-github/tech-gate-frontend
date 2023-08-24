<script setup lang="ts">
import {useUserProfileStore} from '~/stores/user_profile'

const userProfileStore = useUserProfileStore()
const path = useRoute().path
const columns: {path: string, name: string}[] = [
  {path: "/profile/all", name: "すべて"},
  {path: "/profile/bookmarks", name: "ブックマーク"},
  {path: "/profile/comments", name: "コメント"},
  {path: "/profile/likes", name: "いいね"},
]
</script>

<template>
    <div class="w-full border h-[160px] flex items-center justify-between px-6">
        <div class="flex w-full items-start justify-center space-x-6">
            <img :src="userProfileStore.userProfile.image" alt="プロフィール" class="w-[130px] h-[130px] object-cover rounded-full" />
            <div class="flex items-center justify-between w-full">
                <p class="text-[15px] font-[600] text-[#1F1F1F]">{{userProfileStore.userProfile.name}}</p>
                <NuxtLink to="/profile" class="cursor-pointer border px-5 py-[7px]">プロフィールを編集する</NuxtLink>
            </div>
        </div>
    </div>

    <div class="w-full flex items-center justify-start space-x-3.5 mt-10 font-[600] text-[14px] border-b-2 py-3 px-3">
        <NuxtLink
                v-for="(column, index) in columns"
                :key="index"
                class="cursor-pointer"
                :class="{'text-[#228BE6]': path === column.path}"
                :to="column.path"
        >
            {{column.name}}
        </NuxtLink>
    </div>
</template>

<style scoped>

</style>
