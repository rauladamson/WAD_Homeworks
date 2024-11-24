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
