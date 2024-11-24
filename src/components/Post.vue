<script>
export default {
  name: "Post",
  props: ["postId"],
  computed: {
    // Fetch the post data from Vuex using the postId
    post() {
      return this.$store.state.posts.find((p) => p.id === this.postId);
    },
  },
  methods: {
    likePost() {
      // Trigger a Vuex mutation to increment likes
      this.$store.commit("incrementLikes", this.postId);
    },
  },
};
</script>

<template>
  <div class="post">
    <!-- Post Header -->
    <div class="post-header">
      <img
          :src="'/WAD_Homeworks/src/assets/images/prof_pics/' + post.user.profile_picture"
          alt="Profile"
          class="profile-icon"
      />
      <div>
        <h3>{{ post.user.name }}</h3>
        <small>{{ post.date }}</small>
      </div>
    </div>

    <!-- Post Content -->
    <p class="post-content">{{ post.text }}</p>

    <!-- Post Image -->
    <img v-if="post.image" :src="'/WAD_Homeworks/src/assets/images/post_pics/' + post.image" alt="Post image" class="post-pic" />

    <!-- Like Button -->
    <button @click="likePost">Like ({{ post.likes }})</button>
  </div>
</template>

<style scoped>
.post {
  border: 1px solid black;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: black;
}

.post-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.profile-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.post-content {
  font-size: 14px;
  margin-bottom: 8px;
}

.post-pic {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  margin-bottom: 8px;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
