import { ref } from "vue";

export const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/posts');
      if (!data.ok) {
        throw Error('no dat available');
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};
