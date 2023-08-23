<script setup lang="ts">
import { login } from '../../service/auth.service'
const loading = ref<boolean>(false);
const message = ref<string>("");

const router = useRouter()
const { jwtToken, updateJwtToken } = useJwtToken<string | undefined>(undefined)
const initialValues: {
    email: string;
    password: string;
  } = {
    email: "",
    password: "",
  };

const values = ref(initialValues)

function handleChange(event: Event) {
    values.value = {
      ...values.value,
      [event.target.name]: event.target.value,
    };
}

const onSubmit = () => {
  const { email, password } = values.value;
  message.value= "";
  loading.value = true;
  if (email == "" || password ==""){
    loading.value =false;
    message.value= "正しいユーザーIDまたはパスワードを入力してください。";
    updateJwtToken(undefined)
    return
  }
  login(email, password).then(
      (response) => {
        console.log("response:",response.data.api_token )
        if (response.data.api_token == undefined){
          loading.value =false;
          message.value= "正しいユーザーIDまたはパスワードを入力してください。";
          updateJwtToken(undefined)
          return
        }

        updateJwtToken(response.data.api_token)
        localStorage.setItem('jwtToken', jwtToken.value)
        router.push({ path: '/dashboard' })
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        loading.value =false;
        message.value= resMessage;
      }
    );
}
</script>

<template>
  <div class="bg-black min-h-screen flex flex-col items-center justify-center">
    <div
      class="tracking-[0.3em] my-12 text-white text-5xl w-full mx-auto text-center bg-gradient-to-r from-[rgb(127,107,49)] py-2"
    >
      <span>N</span>ext-<span>S</span>tep
    </div>
    <div class="mx-auto flex items-center justify-center">
      <img
        class="w-1/2 mx-auto md:w-[450px] h-[400px]"
        src="~/assets/images/coldrain.jpg"
      />
      <form novalidate >
      <div
      class="w-1/2 flex md:w-[450px] items-center justify-center flex-col mx-auto h-[400px] space-y-7"
      >
      <div class="flex flex-col space-y-2 container w-full">
        
          <label class="w-5/6 mx-auto text-left text-white font-bold"
            >メールアドレス</label
          >
          <input
            type="text"
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            class="w-5/6 mx-auto border px-2 py-1 border-black"
            placeholder="sample@coldrain.com"
            @change="handleChange"
            :value="values.email"
            helperText="You also can use your email"
            required
          />
        </div>
        <div class="flex flex-col space-y-2 container w-full">
          <label class="w-5/6 mx-auto text-left text-white font-bold"
            >パスワード</label
          >
          <input
            id="password"
            name="password"
            label="Password"
            type="password"
            class="w-5/6 mx-auto border px-2 py-1 border-black"
            placeholder="password"
            @change="handleChange"
            :value="values.password"
            required
          />
        </div>
        <div v-if="message" class="alert alert-info text-red-300"> {{message}} </div>
        <div class="relative">
          <div
            class="border rounded-full border-[rgb(127,107,49)] w-[160px] mx-auto h-[40px] animate-pulse"
          />
          <button 
            class="absolute text-sm top-0 left-[28px] md:left-[28px] text-[rgb(127,107,49)] w-2/3 mx-auto px-3 py-2 text-center cursor-pointer tracking-[0.1em] font-bold"
            type="submit"
            fullWidth
            variant="contained"
            @click="onSubmit"
            :disabled="loading"
          >
          <span v-if="loading" className="spinner-border spinner-border-sm">
            <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-gray-200 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
            </svg>
            </span>
            <span>Log In</span>
          </button>
        </div>
        
      </div>
    </form>
    </div>
  </div>
</template>
