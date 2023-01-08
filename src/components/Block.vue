<template>
  <div class="block" :class="{ active: isPlaying }">Click me!</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Block',
  props: {
    delay: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
.block {
  width: 100px;
  height: 100px;
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
