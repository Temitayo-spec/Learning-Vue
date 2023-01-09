<template>
  <h1>JobPage</h1>
  <div class="job" v-for="job in jobs" :key="job.id">
    <router-link :to="{ name: 'JobsDetail', params: { id: job.id } }">
      <h2>
        {{ job.name }}
      </h2>
    </router-link>
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'JobPage',
  data() {
    return {
      jobs: [],
    };
  },
};
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}

.jobh2:hover {
  background: #ddd;
}

.job a {
  text-decoration: none;
  color: #333;
}
</style>
