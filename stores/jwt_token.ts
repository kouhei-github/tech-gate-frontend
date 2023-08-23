import { defineStore } from "pinia";

export const useCounterStore = defineStore('counterStore', {
  state: () => {
    return {
      'counter': 0
    }
  }
})
