<script setup lang="ts">
import {useCounterStore} from '~/stores/jwt_token'

const counter = useCounterStore()
</script>

<template>
  {{ counter.counter }}
  <button @click="counter.counter++">button</button>
</template>

<style scoped>

</style>
