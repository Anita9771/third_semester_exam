// composables/useCounter.js

import { computed } from 'vue'
import { useStore } from 'vuex'

export default function useCounter() {
  const store = useStore()
  
  const count = computed(() => store.state.counter.count)
  
  function increment() {
    store.commit('counter/increment')
  }

  function decrement() {
    store.commit('counter/decrement')
  }

  function setValue(value) {
    store.commit('counter/setValue', value)
  }

  function reset() {
    store.commit('counter/reset')
  }

  return {
    count,
    increment,
    decrement,
    setValue,
    reset,
  }
}
