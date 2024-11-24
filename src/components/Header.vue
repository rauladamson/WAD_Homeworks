<script>
export default {
  name: "Header",
};
</script>

<template>
  <header>
    <nav>
      <div id="links">
        <router-link to="/">Main Page</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center; /* Centers nav horizontally */
  align-items: center; /* Centers nav vertically */
  height: 100vh; /* Makes header take the full viewport height */
  background-color: #007bff; /* Blue background */
  color: white;
}

nav {
  font-size: 1.5rem;
  text-align: center;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 15px; /* Spacing between links */
}

nav a:hover {
  text-decoration: underline;
}
</style>