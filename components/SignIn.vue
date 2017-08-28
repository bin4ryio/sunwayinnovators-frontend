<template>
  <div>

    <form v-if="!currentUser" v-on:submit.prevent>
      <h3>Please login to see the secret content</h3>
      <input v-model="user.email" placeholder="Email" />
      <input v-model="user.password" placeholder="Password" type="password"  />
      <button @click="signIn">Sign In</button>
      <p class="error" v-if="error">{{ error }}</p>
    </form>

    <div v-else>
      <h3>Hello {{ currentUser }}!</h3>
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
      'currentUser': 'auth/authUser'
    })
  },
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      this.$store.dispatch('auth/signIn', {
        axios: this.$axios,
        user: this.user
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
