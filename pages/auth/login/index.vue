<template>
  <div>
    <b-form inline class="w-50 mx-auto">
      <label class="sr-only" for="inline-form-input-email">Email</label>
      <b-form-input
        v-model="form.email"
        id="inline-form-input-email"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Jane Doe"
      ></b-form-input>

      <label class="sr-only" for="inline-form-input-password">Password</label>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input
          v-model="form.password"
          id="inline-form-input-password"
          placeholder="password"
          type="password"
        ></b-form-input>
      </b-input-group>

      <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
        >Remember me</b-form-checkbox
      >

      <b-button
        type="submit"
        variant="primary"
        class="btnSubmit"
        @click="onSubmit"
        :disabled="isLoading"
        >Login</b-button
      >
      <p>
        Not have account yet?
        <nuxt-link to="/auth/register">Register</nuxt-link>
      </p>
    </b-form>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading;
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      let ctx = this;
      ctx.$store.dispatch("auth/login", this.form);
      isLoading();
    }
  }
};
</script>
