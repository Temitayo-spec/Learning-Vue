<template>
  <p>Reaction time - {{ score }} ms</p>
  <p class="rank">
    {{ rank }}
  </p>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Results',
  props: ['score'],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = 'Ninja Fingers';
    } else if (this.score < 400) {
      this.rank = 'Rapid Reflexes';
    } else {
      this.rank = 'Slowpoke';
    }
  },
};
</script>

<style>
p {
  font-size: 20px;
  margin: 20px 0;
  color: #0faf87;
}
.rank {
  font-size: 20px;
  font-weight: bold;
  color: #ccc;
}
</style>
