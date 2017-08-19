<template>
  <div>
    <form v-if="!user" v-on:submit.prevent>
      <h3>Please login to see the secret content</h3>
      <input v-model="email" placeholder="Email" />
      <input v-model="password" placeholder="Password" type="password"  />
      <button @click="signIn">Sign In</button>
      <p class="error" v-if="error">{{ error }}</p>
    </form>
    <div v-else>
      <h3>Hello {{ user }}!</h3>
      <pre>I am the secret content, I am shown only when the use is connected.</pre>
      <p><i>You can also refresh this page, you'll still be connected!</i></p>
      <button @click="signOut">Sign Out</button>
    </div>
    <p><nuxt-link to="/secret">Super secret page</nuxt-link></p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      'error': 'auth/authError',
      'user': 'auth/authUser'
    })
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn () {
      this.$store.dispatch('auth/signIn', {
        axios: this.$axios,
        email: this.email,
        password: this.password
      })
    },
    ...mapActions({
      signOut: 'auth/signOut'
    })
  }
}
</script>

<style>
</style>
