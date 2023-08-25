<script setup lang="ts">
import {googleLogin} from '~/models/googleLogin'
import {useJwtTokenStore} from '~/stores/jwt_token'
import {useUserProfileStore} from '~/stores/user_profile'


definePageMeta({
  layout: 'dashboard',
  middleware: ['auth'],
})

const route = useRoute()
const router = useRouter()
// JWTトークンを保存
const jwtTokenStore = useJwtTokenStore()
// ユーザー情報を保存
const userProfileStore = useUserProfileStore()
onMounted(async () => {
  const response = await googleLogin(route.query)
  // ストアにJWTトークンの保存
  jwtTokenStore.updateToken(response.jwtToken)
  const user = {
    name: response.userName,
    image: response.userImage,
    email: response.email,
    github: response.githubUser,
    twitter: response.twitterUser,
    introduction: response.selfIntroduction
  }
  // ユーザー情報を保存
  userProfileStore.updateUserProfile(user)
  // リダイレクト(ヒストリーに残さない)
  await router.replace( "/" )
})
</script>

<template>
  <div class="flex items-center justify-center h-[65vh]">
    <div class="w-full text-center text-blue-700 underline underline-offset-4 text-5xl">ページ遷移中です少々お待ちください</div>
  </div>
</template>

<style scoped>

</style>
