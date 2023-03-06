<template>
  <div id="app">
    <router-view />
  </div>
</template>


// <script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
// </script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}

button{
  cursor: pointer;
}

#app{
  background: #35495e;
  height: 100vh;
}
</style>
