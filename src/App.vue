<template>
  <SignupForm />
</template>

<script>
import SignupForm from './components/SignupForm.vue';

export default {
  name: 'App',
  components: {
    SignupForm,
  },
  data() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  background: #0faf87;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 20px;
  letter-spacing: 1px;
  margin: 20px 0;
}

button:hover {
  background: #0c8c6e;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>
