<template>
  <div>
    <form v-if="!user" @submit.prevent="login">
      <h3>Please login to see the secret content</h3>
      <mu-text-field label="Email" labelFloat v-model="email" />
      <mu-text-field label="Password" labelFloat type="password" v-model="password" />
      <mu-raised-button label="Login" type="submit" primary />
      <p class="error" v-if="error">{{ error }}</p>
    </form>
    <div v-else>
      <h3>Hello {{ user }}!</h3>
      <pre>I am the secret content, I am shown only when the use is connected.</pre>
      <p><i>You can also refresh this page, you'll still be connected!</i></p>
      <mu-raised-button label="Logout" type="submit" primary @click="logout"/>
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
    login () {
      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password
      })
    },
    ...mapActions({
      logout: 'auth/logout'
    })
  }
}
</script>

<style>
.error {
  color: red;
}
</style>
