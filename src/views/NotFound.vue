<template>
  <div class="not-found">
    <h1>
      404 <br />
      Not Found!
    </h1>
    <br />
    <p>The page you are looking for does not exist.</p>
    <br />
    <p>Visit the <router-link to="/counter">COUNTER</router-link> page</p>
  </div>
</template>

<style scoped>
.not-found {
  background: #42b883;
  height: 80vh;
  width: 70vw;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin: 5% auto;
}
</style>
