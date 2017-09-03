<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <form v-on:submit.prevent>
          <h3>Sign Up</h3>
          <input v-model="user.email" placeholder="Email" />
          <input v-model="user.password" placeholder="Password" type="password"  />
          <input v-model="user.passwordConfirmation" placeholder="Password Confirmation" type="password"  />
          <button @click.native="signUp">Login</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      user: {
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    }
  },
  methods: {
    signUp () {
      this.$store.dispatch('auth/signUp', {
        axios: this.$axios,
        user: this.user
      })
    },
    ...mapActions({
      logout: 'auth/signOut'
    })
  }
}
</script>

<style>
</style>
