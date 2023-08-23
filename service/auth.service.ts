import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/v1/";

export const useJwtToken: () => { jwtToken: Ref<string>; updateJwtToken: (value: string) => string } = () => {
  // stateの定義
  const jwtToken: Ref<string> = useState<string>('auth', () => '')

  return {
    jwtToken: jwtToken, // stateはreadonlyとし、update関数を通してのみ更新できる
    updateJwtToken: updateJwtToken(jwtToken),
  }
}


export const register = (username: string, email: string, password: string) => {
  return axios.post(`${API_URL}signup`, {
    username,
    email,
    password,
  });
};

export const login = (email: string, password: string) => {
  return axios
    .post(`${API_URL}login`, {
      email,
      password,
    })
    .then((response) => {
      if (response.data) {
        return response;
      }else{
        return {"data": {"api_token": undefined}};
      }
    });
};

export const logout = () => {
  const { updateJwtToken } = useJwtToken()
  updateJwtToken("")
  localStorage.removeItem("jwtToken");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};

import type { Ref } from 'vue'

interface JwtTokenType {
  readonly jwtToken: string
  updateJwtToken(jwtToken: Ref<string>): void
}

// stateの更新処理
export const updateJwtToken = (jwtToken: Ref<string>) => (value: string) => (jwtToken.value = value)
