<template>
  <div>
    <form v-on:submit.prevent>
      <h3>Sign Up</h3>
      <input v-model="user.email" placeholder="Email" />
      <input v-model="user.password" placeholder="Password" type="password"  />
      <input v-model="user.passwordConfirmation" placeholder="Password Confirmation" type="password"  />
      <button @click="signUp">Login</button>
    </form>
  </div>
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
