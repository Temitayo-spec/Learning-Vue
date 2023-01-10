<template>
  <div v-if="error">
    {{ error }}
  </div>
  <div v-if="post" class="post">
    <h3>
      {{ post.title }}
    </h3>
    <div class="pre">
      {{ post.body }}
    </div>
  </div>
</template>

<script>
import { getPost } from '../composables/getPost';
export default {
  name: 'DetailsView',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { post, error, load } = getPost(props.id);

    load();

    return { post, error };
  },
};
</script>

<style>
.post {
  max-width: 12000px;
  margin: 0 auto;
}

.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}

.pre {
  white-space: pre-wrap;
}
</style>
