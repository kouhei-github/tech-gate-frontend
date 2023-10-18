import axios, {AxiosResponse} from 'axios'
import {LocationQuery} from 'vue-router'

export const googleOauth = async (): Promise<{Message: string}> => {
  const config = useRuntimeConfig();
  return axios
      .get(`${config.public.apiUrl}/google/login`, {})
      .then((response) => {
        const result: {Message: string} = response.data
        return result;
      });
};

export type CallbackResponse = {
  jwtToken: string,
  userName: string,
  userImage: string,
  githubUser: string,
  twitterUser: string,
  selfIntroduction: string,
  email: string
}
export const googleLogin = async (query: LocationQuery): Promise<CallbackResponse> => {
  const config = useRuntimeConfig();
  return axios
      .get(`${config.public.apiUrl}/google/callback`, {params: query})
      .then((response) => {
        const result: CallbackResponse = response.data
        return result;
      });
};
