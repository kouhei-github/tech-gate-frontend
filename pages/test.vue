<script setup lang="ts">
import {useJwtTokenStore} from '~/stores/jwt_token'

const jwt = useJwtTokenStore()
</script>

<template>
  {{ jwt.jwtToken }}
</template>

<style scoped>

</style>
