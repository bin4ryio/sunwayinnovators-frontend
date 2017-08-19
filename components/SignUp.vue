<template>
  <div>
    <form v-on:submit.prevent>
      <h3>Sign Up</h3>
      <input v-model="email" placeholder="Email" />
      <input v-model="password" placeholder="Password" type="password"  />
      <input v-model="passwordConfirmation" placeholder="Password Confirmation" type="password"  />
      <button @click="signUp">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  },
  methods: {
    signUp () {
      this.$store.dispatch('auth/signUp', {
        axios: this.$axios,
        email: this.email,
        password: this.password,
        passwordConfirmation: this.passwordConfirmation
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
