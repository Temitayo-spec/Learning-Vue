<template>
  <h1>Jobs Detail</h1>
  <p>The job id is {{ id }}</p>
</template>

<script>
export default {
  name: 'JobsDetail',
  props: ['id'],
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
};
</script>

<style></style>
