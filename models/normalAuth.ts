import {useJwtTokenStore} from '~/stores/jwt_token'
import {type CallbackResponse} from '~/models/googleLogin'
import {useUserProfileStore} from '~/stores/user_profile'

export const normalLogin = async (body: {email: string, password: string}) => {
  const config = useRuntimeConfig();

  const headers = {
    'Content-Type': 'application/json',
  };
  const res = await fetch(
      `${config.public.apiUrl}/login`,
      { method: "POST", headers: headers, body: JSON.stringify(body)}
  )
  const response: CallbackResponse = await res.json()
  // JWTトークンを保存
  const jwtTokenStore = useJwtTokenStore()
  // ユーザー情報を保存
  const userProfileStore = useUserProfileStore()
  // ストアにJWTトークンの保存
  jwtTokenStore.updateToken(response.jwtToken)
  const user = {
    name: response.userName,
    image: response.userImage === "" ? "/images/Userimage.webp" : response.userImage,
    email: response.email,
    github: response.githubUser,
    twitter: response.twitterUser,
    introduction: response.selfIntroduction
  }
  // ユーザー情報を保存
  userProfileStore.updateUserProfile(user)

};

export const normalSignup = async (body: {email: string, password: string, user_name: string}) => {
  const config = useRuntimeConfig();

  const headers = {
    'Content-Type': 'application/json',
  };
  const res = await fetch(
      `${config.public.apiUrl}/signup`,
      { method: "POST", headers: headers, body: JSON.stringify(body)}
  )
  const response: CallbackResponse = await res.json()
  // JWTトークンを保存
  const jwtTokenStore = useJwtTokenStore()
  // ユーザー情報を保存
  const userProfileStore = useUserProfileStore()
  // ストアにJWTトークンの保存
  jwtTokenStore.updateToken(response.jwtToken)
  const user = {
    name: response.userName,
    image: response.userImage === "" ? "/images/Userimage.webp" : response.userImage,
    email: response.email,
    github: response.githubUser,
    twitter: response.twitterUser,
    introduction: response.selfIntroduction
  }
  // ユーザー情報を保存
  userProfileStore.updateUserProfile(user)
};
