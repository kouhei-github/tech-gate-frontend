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
9425  git stash push src/domain/README.md -m "README.mdの更新"
9426  git stash pop stash@{0}
9427  git stash list
