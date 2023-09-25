<script setup lang="ts">
import {useUserProfileStore} from "~/stores/user_profile";
import {UserPayload, userUpdateRequest} from '~/models/user'
import {useJwtTokenStore} from '~/stores/jwt_token'

definePageMeta({
  layout: 'dashboard',
})

const userProfileStore = useUserProfileStore()

const userInfo = reactive<UserPayload>({
  userName: userProfileStore.userProfile.name,
  selfIntroduction: userProfileStore.userProfile.introduction,
  githubUser: userProfileStore.userProfile.github,
  twitterUser: userProfileStore.userProfile.twitter,
})

const isRequire = ref<boolean>(false)

const jwtToken = useJwtTokenStore()
const router = useRouter()
const sendToServer = async () => {
  if(userInfo.userName === ""){
    isRequire.value = true
    return
  }
  const response = await userUpdateRequest(userInfo)
  isRequire.value = false
  if (typeof response !== 'number') {
    userProfileStore.updateUserProfile( {
      name: response.userName,
      email: response.email,
      introduction: response.selfIntroduction,
      github: response.githubUser,
      twitter: response.twitterUser,
      image: response.image
    } )
    alert("更新できました")
    return
  }
  if (response === 403){
    jwtToken.updateToken("")
    await router.replace("/")
  }
  // 更新できたことを伝える

}

</script>

<template>
    <div class="w-[730px] mx-auto my-4">
        <h3 class="text-3xl font-[800]">プロフィール</h3>
        <div class="flex items-start justify-center space-x-10 my-10">
          <div class="space-y-5">
            <img class="w-[120px] h-[120px] object-cover rounded-full" :src="userProfileStore.userProfile.image" alt="プロフィール" />
            <p class="text-[#90979F] text-[13px] text-center w-[120px] cursor-pointer">変更する</p>
          </div>
          <div>
              <div class="flex items-center mb-1">
                <label class="text-[#727476] text-[13px]">ニックネーム</label>
                <p class="ml-2 text-[rgb(250,82,82)]">*</p>
                <span v-if="isRequire" class="text-red-500 underline ml-5 animate-bounce">入力してください</span>
              </div>
              <input v-model="userInfo.userName" placeholder="表示名を入力" type="text" class="border w-full border-[#E5E7EB] py-1 px-2 rounded" />
              <div class="mt-7">
                <label class="text-[#727476] text-[13px]">自己紹介</label>
                <textarea v-model="userInfo.selfIntroduction" placeholder="自己紹介を入力" rows="3" cols="50" class="border w-full border-[#E5E7EB] py-[4px] px-[8px] rounded mt-1" />
              </div>

              <div class="flex items-center justify-center mt-7 w-full space-x-2 mb-7">
                <div class="w-[50%] mx-auto">
                  <div class="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="18" height="18" fill="currentColor"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    <label class="text-[#727476] text-[15px] font-[500]">GitHubユーザー名</label>
                  </div>
                  <input v-model="userInfo.githubUser" placeholder="ユーザー名のみを入力" type="text" class="mt-1 border w-full border-[#E5E7EB] py-1 px-2 rounded" />
                </div>
                <div class="w-[50%] mx-auto">
                  <div class="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 209" fill="currentColor" width="18" height="18" color="#00ACEE"><path fill-rule="nonzero" d="M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 01-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 01-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 01-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 00256 25.45"></path></svg>
                    <label class="text-[#727476] text-[15px] font-[500]">Twitterユーザー名</label>
                  </div>
                  <input v-model="userInfo.twitterUser" placeholder="@なしで入力" type="text" class="mt-1 border w-full border-[#E5E7EB] py-1 px-2 rounded" />
                </div>
              </div>
              <div @click="sendToServer()" class="w-max mx-auto px-6 py-2 text-white bg-[#228BE6] cursor-pointer hover:bg-blue-600 font-bold rounded-full">更新する</div>
          </div>

        </div>
    </div>
</template>

<style scoped>

</style>
