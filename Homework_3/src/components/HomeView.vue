<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Post from "@/components/Post.vue"; // Ensure the path is correct

const store = useStore();

// Get the list of posts from Vuex
const posts = computed(() => store.state.posts);

// Reset all likes to zero
const resetLikes = () => {
  store.commit("resetLikes");
};
</script>

<template>
  <div>
    <h1>Main Page</h1>
    <!-- Reset Button -->
    <button @click="resetLikes" class="reset-button">Reset All Likes</button>

    <!-- Post List -->
    <div class="post-list">
      <Post
          v-for="post in posts"
          :key="post.id"
          :postId="post.id"
      />
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
}

h1 {
  margin-bottom: 2rem;
}

.reset-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 2rem;
}

.reset-button:hover {
  background-color: #0056b3;
}

.post-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  max-width: 1200px;
}

.post {
  width: 600px;
  margin-bottom: 16px;
}
</style>
