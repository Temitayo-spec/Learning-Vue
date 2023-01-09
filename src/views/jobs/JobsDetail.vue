<template>
  <h1>
    {{ job?.title }}
  </h1>
  <p>
    {{ job?.description }}
  </p>
  <p>The job id is {{ id }}</p>
</template>

<script>
export default {
  name: 'JobsDetail',
  props: ['id'],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch(`http://localhost:3000/jobs/${this.id}`)
      .then((response) => response.json())
      .then((json) => (this.job = json))
      .catch((error) => console.log(error.message));
  },
};
</script>

<style></style>
