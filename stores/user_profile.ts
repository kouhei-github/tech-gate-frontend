import { ref } from "vue";
import { defineStore } from "pinia";

type User = {
  name: string
  image: string
}
export const useUserProfileStore = defineStore(
    'userStore',
    () => {
      const userProfile = reactive<User>({name: "", image: ""});
      function updateUserProfile(user: User) {
        userProfile.image = user.image
        userProfile.name = user.name
      }
      return { userProfile, updateUserProfile };
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
