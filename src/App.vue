<template>
  <div id="nav">
    <router-link to="/"> Home </router-link>
    <router-link to="/about"> About </router-link>
    <router-link to="/jobs"> Jobs </router-link>
  </div>
  <button>Redirect</button>
  <button></button>
  <button></button>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
  font-weight: bold;
  border-bottom: 1px solid #42b983;
  padding-bottom: 10px;
}
</style>
