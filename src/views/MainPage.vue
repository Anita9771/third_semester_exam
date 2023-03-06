<template>
  <div>
    <h1>Counter</h1>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment">Increment</button>
    <button @click="counter.decrement">Decrement</button>
    <button @click="counter.reset">Reset</button>
    <input type="number" v-model="newCountValue" />
    <button @click="setCount">Set Value</button>
  </div>
</template>

<script>
import useCounter from '../composables/useCounter'
// import useMutation from '../useMutation'
import { ref } from 'vue'


export default {
  setup() {
    const counter = useCounter()
    const newCountValue = ref(0)
    // const { commit } = useMutation()

    // function increment() {
    //   commit('increment')
    // }

    function setCount() {
      counter.setValue(newCountValue.value)
    }

    return {
      counter,
      newCountValue,
      setCount,
    }
  },
}
</script>

