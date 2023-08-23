<script setup lang="ts">
import {googleLogin} from '~/models/googleLogin'
import {useJwtTokenStore} from '~/stores/jwt_token'

definePageMeta({
  layout: 'dashboard',
  middleware: ['auth'],
})

const route = useRoute()
const router = useRouter()
const jwtTokenStore = useJwtTokenStore()
onMounted(async () => {
  const jwtToken = await googleLogin(route.query)
  // ストアにJWTトークンの保存
  jwtTokenStore.updateToken(jwtToken.jwtToken)
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
