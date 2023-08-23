<script setup lang="ts">
// userProfileを取得するためにストアにアクセス
import {useUserProfileStore} from '~/stores/user_profile'

const userProfileStore = useUserProfileStore()
const toggleOpen = ref<boolean>(false)
const changeToggle = () => {
  toggleOpen.value = !toggleOpen.value
}
</script>

<template>
    <div class="relative">
        <img @click="changeToggle()" class="w-[50px] cursor-pointer rounded-full h-[50px] object-cover" alt="プロフィル" :src="userProfileStore.userProfile.image" />
        <div v-if="toggleOpen" class="absolute -right-[150%] bg-white w-[200px] h-[353px] border">
            <NuxtLink to="/profile/all">
              <div class="w-full text-[#8E969D] py-4 my-1 text-[12px] bg-[rgb(241,243,245)]">
                  <span class="ml-2 font-[500] tracking-[0.1em]">{{userProfileStore.userProfile.name}}</span>
              </div>
            </NuxtLink>
            <div class="w-10/12 mx-auto">
              <div class="text-[#515151] text-[14px] space-y-4 border-y py-2">
                  <NuxtLink to="/profile/bookmarks">
                    <div class="flex items-center justify-start space-x-1 py-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" width="14" height="14" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path></svg>
                        <p>ブックマークした記事</p>
                    </div>
                  </NuxtLink>
                  <NuxtLink to="/profile/comments">
                    <div class="flex items-center justify-start space-x-1 py-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" width="14" height="14" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1"></path></svg>
                        <p>コメントした記事</p>
                    </div>
                  </NuxtLink>
                  <NuxtLink to="/profile/likes">
                    <div class="flex items-center justify-start space-x-1 py-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" width="14" height="14" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path></svg>
                        <p>いいねした記事</p>
                    </div>
                  </NuxtLink>
              </div>
              <div class="text-[#515151] text-[14px] space-y-4 border-b py-2">
                  <p class="text-[#8E969D] text-[12px]">Settings</p>
                  <NuxtLink to="/profile/edit">
                  <div class="flex items-center justify-start space-x-1 py-2 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" width="14" height="14" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                      <p>プロフィール編集</p>
                  </div>
                  </NuxtLink>
                  <NuxtLink to="/profile/logout">
                    <div class="flex items-center justify-start space-x-1 py-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" width="14" height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path><path d="M7 12h14l-3 -3m0 6l3 -3"></path></svg>
                        <p>ログアウト</p>
                    </div>
                  </NuxtLink>
              </div>
              <div class="text-[#515151] text-[14px] space-y-4 py-2">
                  <p class="text-[#8E969D] text-[12px]">Danger zone</p>
                  <NuxtLink to="/profile/all">
                    <div class="flex items-center justify-start space-x-1 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#FB7777]" width="14" height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="4" y1="7" x2="20" y2="7"></line><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path></svg>
                        <p class="text-[#FB7777]">退会する</p>
                    </div>
                  </NuxtLink>
              </div>
          </div>
        </div>
    </div>
</template>

<style scoped>

</style>
