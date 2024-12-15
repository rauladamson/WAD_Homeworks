<!-- src/views/APost.vue -->
<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const route = useRoute();
const router = useRouter();

const postId = Number(route.params.id); // Fetch the postId from route params

// Fetch the specific post
const post = computed(() => store.state.posts.find((p) => p.id === postId));

// Local reactive state for editing
const body = ref(post.value ? post.value.text : "");

// Update the post
const updatePost = () => {
  store.commit("updatePost", { id: postId, text: body.value });
  alert("Post updated successfully!");
};

// Delete the post
const deletePost = () => {
  store.commit("deletePost", postId);
  router.push("/"); // Redirect to homepage
};
</script>

<template>
  <div v-if="post" class="post-details">
    <h1>A Post</h1>
    <div class="form">
      <label>Body:</label>
      <input v-model="body" type="text" />
      <div class="buttons">
        <button @click="updatePost">Update</button>
        <button @click="deletePost" class="delete">Delete</button>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Post not found.</p>
  </div>
</template>

<style scoped>
.post-details {
  text-align: center;
  margin: 2rem auto;
  max-width: 400px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

button {
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
}

button:hover {
  opacity: 0.9;
}

button:nth-child(1) {
  background-color: #007bff;
}

button.delete {
  background-color: #dc3545;
}
</style>
