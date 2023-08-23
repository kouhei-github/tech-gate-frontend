// The isLogined variable is now assigned using Boolean(jwtToken.value)
// instead of a lengthy comparison. This is a more concise way of checking if jwtToken.value is truthy or falsy.
  import {useJwtToken} from '~/service/auth.service'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { jwtToken } = useJwtToken()
  const isLogined = Boolean(jwtToken.value)

  console.log("isLogined:", isLogined)

  if (!isLogined && to.path !== '/login') {
    console.log("Navigating to login page:", to.path)
    await navigateTo('/login')
  }
})
