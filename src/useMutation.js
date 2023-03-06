import { useStore } from 'vuex'

export default function useMutation() {
  const store = useStore()

  function commit(mutationType) {
    return (payload) => {
      store.commit(mutationType, payload)
    }
  }

  return {
    commit,
  }
}
