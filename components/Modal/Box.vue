<script setup lang="ts">
import Login from '~/pages/google/login.vue'
import Google from '~/components/Login/Google.vue'

interface Emits {
  // 関数名, 引数の型, 返り値の型
  (e: 'changeModal', v: boolean): void;
}

const emits = defineEmits<Emits>();

</script>

<template>
  <div class="relative bg-white w-[400px] h-[400px] flex items-center justify-center" >
    <svg class="absolute cursor-pointer w-[23px] h-[23px] top-3 right-3" @click="emits('changeModal', false)" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    <div class="w-10/12 mx-auto">
      <div class="flex items-center justify-around w-full">
        <img alt="ロゴ" class="w-[140px] h-[140px]" src="/images/download.webp">
        <p class="tracking-[0.3em]">TechGate</p>
      </div>
      <p class="text-[#899199] text-[14px]">TechGateは個人開発者のための技術記事データベースです。 目的の記事を見つけたらいいねやストックをしましょう</p>
      <Google />
      <div class="text-[#899199] text-[14px] text-center">
        <span class="text-[#3D91DC] hover:underline hover:underline-offset-2">利用規約</span>、<span class="text-[#3D91DC]">プライバシーポリシー</span>に同意したうえでログインしてください。
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
