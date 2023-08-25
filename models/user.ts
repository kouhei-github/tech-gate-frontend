import axios from 'axios'
import {useJwtTokenStore} from '~/stores/jwt_token'

export type UserPayload = {
  userName: string,
  selfIntroduction: string,
  githubUser: string,
  twitterUser: string
}

type Response = {
  image: string
  email: string
} & UserPayload
export const userUpdateRequest = async (payload: UserPayload): Promise<Response | number> => {
  const jwtTokenStore = useJwtTokenStore()
  const config = useRuntimeConfig();
  return axios
      .put(`${config.public.apiUrl}/user/update`, payload, {headers:{Authorization: "Bearer " + jwtTokenStore.jwtToken}} )
      .then((response) => {
        const result: Response = response.data
        return result;
      })
      .catch((e: {response: {status: number}}) => {
        return e.response.status
      })
};
