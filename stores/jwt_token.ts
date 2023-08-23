import { ref } from "vue";
import { defineStore } from "pinia";

export const useJwtTokenStore = defineStore(
    'counterStore',
    () => {
      const jwtToken = ref<string>("");
      function updateToken(newToken: string) {
        jwtToken.value = newToken
      }
      return { jwtToken, updateToken };
    },
    {
        persist: true,
    }
//     セッションストレージ
// {
//       persist: {
//         storage: persistedState.sessionStorage,
//     },
// }
)
