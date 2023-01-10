<template>
  <div class="single-post">
    <h3>
      <router-link
        :to="{
          name: 'Details',
          params: {
            id: post.id,
          },
        }"
      >
        {{ post.title }}
      </router-link>
    </h3>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
  name: 'SinglePost',
  components: {},
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.slice(0, 100) + '...';
    });

    return {
      snippet,
    };
  },
};
</script>

<style></style>
