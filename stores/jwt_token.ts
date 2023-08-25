import { ref } from "vue";
import { defineStore } from "pinia";

/**
 * JWTトークンを扱うStoreを定義します。このStoreは永続的に保持されます。
 * @function useJwtTokenStore
 * @returns {object} jwtTokenとupdateTokenの２つのプロパティを持つオブジェクトを返します。
 */
export const useJwtTokenStore = defineStore(
    'counterStore',
    () => {
      /**
       * JWTトークンを参照します。
       * @variable {Reactive<string>} jwtToken
       */
      const jwtToken = ref<string>("");

      /**
       * 新しいJWTトークンで既存のトークンを更新します。
       * @function updateToken
       * @param {string} newToken - 新しいJWTトークン
       */
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
