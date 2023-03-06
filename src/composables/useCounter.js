import { computed } from 'vue'
import { useStore } from 'vuex'


export default function useCounter() {
  const store = useStore()
  
  const count = computed(() => store.state.counter.count)

  // const previousCount = computed(() => {
  //   return store.state.counter.count - store.state.counter.step;
  // });
  
  function increment() {
    store.commit('counter/increment')
    // console.log('increment')
    // console.log(previousCount)
  }

  function decrement() {
    store.commit('counter/decrement')
  }

  function setValue(value) {
    store.commit('counter/setValue', value)
  }

  function reset() {
    store.commit('counter/reset')
    setValue(0)
  }

  // function countPrev() {
  //   store.commit('counter/previousCount')
  //   console.log('previousCount')
  // }

  return {
    count,
    increment,
    decrement,
    setValue,
    reset,
    // countPrev,
    // previousCount,
  }
}
