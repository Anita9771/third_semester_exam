const state = {
    count: 0,
  }
  
  const mutations = {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    setValue(state, payload) {
      state.count = payload
    },
    reset(state) {
      state.count = 0
    },
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
  }
  