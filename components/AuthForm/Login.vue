<script setup lang="ts">
import {normalLogin, normalSignup} from '~/models/normalAuth'

interface Emits {
  // 関数名, 引数の型, 返り値の型
  (e: 'changeModal', v: boolean): void;
}

const emits = defineEmits<Emits>();

type props = {
  title: string
  type: "login" | "register"
  button: string
}
const props = defineProps<props>();

const payload = reactive<{email: string, password: string, user_name: string}>({
  email: "", password: "", user_name: ""
})

const router = useRouter()
const sendEndpoint = async () => {
  switch (props.type){
    case "login":
      await normalLogin(payload)
      await router.replace( "/classification/beginner" )
      emits('changeModal', false)
      return
    case "register":
      await normalSignup(payload)
      await router.replace( "/classification/beginner" )
      emits('changeModal', false)
      return
  }
}

</script>

<template>
  <div class="w-11/12 mx-auto  my-3 py-2 bg-gray-100">
      <div class="space-y-2 w-5/6 mx-auto">
          <h3 class="mb-8 text-2xl font-bold">{{props.title}}</h3>
          <div class="space-y-2">
              <input v-model="payload.user_name" v-if="props.type === 'register'" class="border w-full py-2 px-1" type="text" placeholder="my name" />
              <input v-model="payload.email" class="border w-full py-2 px-1" type="email" placeholder="sample@tecklinker.com" />
              <input v-model="payload.password" class="border w-full py-2 px-1" type="password" placeholder="password">
          </div>
      </div>
      <div
        class="mt-8 bg-[#228BE6] w-max mx-auto text-center text-white cursor-pointer rounded-lg px-2 py-1"
        v-on:click="sendEndpoint()"
      >
        {{props.button}}
      </div>

  </div>
</template>

<style scoped>

</style>
