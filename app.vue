<script lang="ts" setup>
const adins = ref()
const adpush = ref()

onMounted(() => {
  const ins = document.createElement("ins") as HTMLElement
  ins.classList.value = "adsbygoogle"
  ins.style.display = "inline-block"
  ins.setAttribute("data-ad-client", "ca-pub-3519272467638604")
  ins.setAttribute("data-ad-slot", "3519272467638604")
  ins.setAttribute("data-ad-format", "rectangle")
  adins.value.appendChild(ins)

  const src = document.createElement("script") as HTMLScriptElement
  src.text = "(adsbygoogle = window.adsbygoogle || []).push({});"
  adpush.value.appendChild(src)
});
</script>

<template>
    <Html>
      <Head>
          <Script defer crossorigin="anonymous" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3519272467638604"></Script>
      </Head>

      <Body class="overflow-hidden">
        <div class="ad">
            <div ref="adins"></div>
            <div ref="adpush"></div>
        </div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
      </Body>
    </Html>
</template>
