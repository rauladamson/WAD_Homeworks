<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Post from "@/components/Post.vue";
import router from "@/router/index.js"; // Ensure the path is correct
import auth from "../auth";

// Navigate to APost view
const goToPost = (postId) => {
  router.push({ name: "APost", params: { id: postId } });
};

// Navigate to AddPost view
const goToAddPost = () => {
  router.push({ name: "AddPost" });
};

// Reset all likes to zero
const resetLikes = () => {
  store.commit("resetLikes");
};

const deleteAllPosts = () => {
  if (confirm("Are you sure you want to delete all posts?")) {
    store.commit("deleteAllPosts"); // Vuex mutation
  }
};
</script>

<template>
  <div>
    <h1>Main Page</h1>
    <!-- Reset Button -->
    <button @click="resetLikes" class="reset-button">Reset All Likes</button>
    <button @click="goToAddPost" class="reset-button">Add Post</button>
    <button @click="deleteAllPosts" class="reset-button">Remove Posts</button>

    <!-- Post List -->
    <div class="post-list">
      <Post
          v-for="post in posts"
          :key="post.id"
          :postId="post.id"
          @click="goToPost(post.id)"
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
