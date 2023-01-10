<template>
  <div class="post-list">
    <h1>Posts</h1>
    <div class="post" v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import SinglePost from './SinglePost.vue';
export default {
  name: 'PostList',
  components: {
    SinglePost,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  setup (props) {
    onMounted(() => {
      console.log(props.posts);
    });
  },
};
</script>

<style></style>
