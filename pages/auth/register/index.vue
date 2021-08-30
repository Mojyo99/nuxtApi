<template>
  <div>
    <b-form inline class="w-50 mx-auto" @submit="onSubmit">
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

      <b-button type="submit" variant="primary">Register</b-button>
      <p>
        Have account?
        <nuxt-link to="/auth/login">Login</nuxt-link>
      </p>
    </b-form>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
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
  methods: {
    onSubmit(event) {
      event.preventDefault();
      let ctx = this;
      ctx.$store.dispatch("auth/register", this.form);
    }
  }
};
</script>
