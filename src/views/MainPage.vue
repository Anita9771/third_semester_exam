<template>
  <div class="container">
    <h1>Counter App </h1>
    <div class="counter">
      <div class="count">{{ counter.count }}</div>
      <div class="count-btns">
        <button class="count-btn" @click="counter.increment">
          <box-icon type="solid" name="up-arrow" color='#35495e' ></box-icon>
        </button>
        <button class="count-btn" @click="counter.reset">
          <box-icon name='reset' color='#35495e' ></box-icon>
        </button>
        <button class="count-btn" @click="counter.decrement">
          <box-icon type="solid" name="down-arrow" color='#35495e' ></box-icon>
        </button>
      </div>

      <div class="value-container">
        <input type="number" v-model="newCountValue" size="3" maxlength="5" />
        <button class="value-btn" @click="setCount">Set Value</button>
      </div>
    </div>
  </div>
</template>

<script>
import useCounter from "../composables/useCounter";
// import useMutation from '../useMutation'
import { ref } from "vue";

export default {
  setup() {
    const counter = useCounter();
    const newCountValue = ref(0);
    // const { commit } = useMutation()

    // function increment() {
    //   commit('increment')
    // }

    function setCount() {
      counter.setValue(newCountValue.value);
    }

    return {
      counter,
      newCountValue,
      setCount,
    };
  },
};
</script>


<style scoped>
.container {
  background: #42b883;
  height: 80vh;
  width: 70vw;
  border-radius: 2rem;
  margin: 5% auto ;
}

.count {
  /* background: #35495e; */
  color: #35495e;
  /* height: 25%;
  width: 25%; */
  font-size: 5rem;
  text-align: center;
  margin-top: -10rem;
  transition: width 1s ease-in-out 0.5s;
}

.count-btn{
  background: transparent;
  border: none;
  padding: 2rem;
}

.counter{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

h1{
  text-align: center;
  padding-top: 5rem;
  color: #35495e;
}

.value-container{
  display: flex;
  flex-direction: column;
}

.value-container input{
  border: 1px solid #35495e;
  outline: none;
  height: 2rem;
  border-radius: .5rem;
  text-align: center;
  color: #35495e;
  background: transparent;
}

.value-container button{
  height: 2rem;
  /* width: 4rem; */
  margin: 1rem auto 0 auto;
  border-radius: .2rem;
  border: none;
  outline: none;
  color: #35495e;
  background: transparent;
}

.value-container button:hover{
  font-size: 1rem;
}
</style>

