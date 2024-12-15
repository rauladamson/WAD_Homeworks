<!-- src/views/AddPost.vue -->
<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

// Reactive variables for the post body
const body = ref("");

// Function to add a new post
const addPost = () => {
  if (!body.value) return alert("Body cannot be empty!");

  // Simulating adding post data with date
  const newPost = {
    id: Date.now(),
    user: { name: "Current User", profile_picture: "default.png" }, // Replace with real user data
    date: new Date().toISOString().split("T")[0],
    text: body.value,
    likes: 0,
  };

  store.commit("addPost", newPost);
  router.push("/"); // Redirect to homepage
};
</script>

<template>
  <div class="add-post">
    <h1>Add Post</h1>
    <div class="form">
      <label>Body:</label>
      <input v-model="body" type="text" placeholder="Enter body here" />
      <button @click="addPost">Add</button>
    </div>
  </div>
</template>

<style scoped>
.add-post {
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

button {
  background-color: #007bff;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
