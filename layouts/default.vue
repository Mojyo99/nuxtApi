<template>
  <div>
    <header>
      <ul>
        <li v-if="$store.state.auth.userData">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li v-if="$store.state.auth.userData" @click="logout">
          <nuxt-link to="/auth/login">Logout</nuxt-link>
        </li>
        <li v-if="!$store.state.auth.userData">
          <nuxt-link to="/auth/login">Login</nuxt-link>
        </li>
        <li v-if="!$store.state.auth.userData">
          <nuxt-link to="/auth/register">Register</nuxt-link>
        </li>
      </ul>
    </header>
    <div class="main">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    }
  }
};
</script>

<style></style>
