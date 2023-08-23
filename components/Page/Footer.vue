<script lang="ts" setup>

type pageNation = {
  name: string,
  path: string
}

const subPages: pageNation[] = [
  {name: "TechGateについて", path: "/about"},
  {name: "プライバシーポリシー", path: "/privacy"},
  {name: "利用規約", path: "/terms"},
]

const route = useRoute()

</script>

<template>
  <div class="">

  </div>
  <div class="w-full space-y-5 h-[15vh] border-y border-[#E9ECEF] flex items-center justify-center">
    <div class="w-full flex items-center justify-between">
      <div class="w-1/2 flex items-center">
        <img alt="ロゴ" src="/images/download.webp" class="w-[180px] h-[70px]" />
        <p class="tracking-[0.5em] text-lg ml-5">TechGate</p>
      </div>
      <div class="flex w-1/2 justify-end">
        <NuxtLink
            v-for="(subPage, index) in subPages"
            v-bind:to="subPage.path"
            class="px-[13px] py-[6px] text-[14px] rounded-md text-[#B7BCC1]"
            :key="index"
        >
          {{subPage.name}}
        </NuxtLink>
      </div>
    </div>
  </div>
  <p class="text-[#B7BCC1] text-[13px]">© 2023 All rights reserved.</p>
</template>
