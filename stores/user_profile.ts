import { ref } from "vue";
import { defineStore } from "pinia";

type User = {
  name: string
  image: string
  email: string
  github: string
  twitter: string
  introduction: string
}
export const useUserProfileStore = defineStore(
    'userStore',
    () => {
      const userProfile = reactive<User>({name: "", image: "", email: "", github: "", twitter: "", introduction: ""});
      function updateUserProfile(user: User) {
        userProfile.image = user.image
        userProfile.name = user.name
        userProfile.email = user.email
        userProfile.github = user.github
        userProfile.twitter = user.twitter
        userProfile.introduction = user.introduction
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
