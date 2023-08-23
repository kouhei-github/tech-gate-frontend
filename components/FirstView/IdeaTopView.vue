<script setup lang="ts">
</script>

<template>
  <div class="relative">
    <img class="h-[320px] w-full object-cover" src="/images/background-idea.webp" alt="ビギナー画像" />
    <div class="absolute top-0 h-[320px] bg-black w-full opacity-60" />
    <div class="absolute top-[26%] left-[26%] text-center text-white w-1/2 mx-auto">
      <h2 class="text-[32px]"><span class="text-[#4DABF7]">"アイデア"</span>に関する記事</h2>
      <div class="text-[16px] leading-8">
        <p>「アイデアが浮かばない...」そんな人はこちらの記事を参考にしましょう。</p>
        <p> 個人開発で使えそうなアイデアが網羅的にまとまっています。</p>
      </div>
      <div class="my-5">
        <NuxtLink class="w-full mx-auto" :to="`/categories/まとめ/`">
          <p class="text-center w-max mx-auto bg-[#228BE6] text-white rounded-full text-[12px] px-2 py-1"># まとめ</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
