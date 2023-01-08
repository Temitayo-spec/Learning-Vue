<template>
  <div class="block" v-if="showBlock"
    @click="stopTimer"
    :class="{ active: showBlock }"
  >Click me!</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Block',
  props: ['delay'],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer () {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer () {
      clearInterval(this.timer);
      this.$emit('reactionTime', this.reactionTime);
      this.showBlock = false;
    },
  },
};
</script>

<style>
.block {
  width: 400px;
  height: 200px;
  background-color: #ccc;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.block.active {
  background-color: #f00;
  color: #fff;
}
</style>
