<template>
  <h1>Itachi's Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying === true">Play</button>
  <Block v-if="isPlaying" :delay="delay" />
</template>

<script>
import Block from './components/Block.vue';

export default {
  name: 'App',
  components: {
    Block,
  },
  data() {
    return {
      isPlaying: false,
      delay: 0,
    };
  },
  methods: {
    start() {
      this.isPlaying = true;
      this.delay = 2000 + Math.random() * 5000;
      setTimeout(() => {
        this.isPlaying = false;
      }, this.delay);
    },
  },
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
</style>
