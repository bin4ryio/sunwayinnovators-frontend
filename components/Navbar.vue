<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <img src="~/assets/logo_glyph.png" alt="Sunway Innovators - Meet fun people">
      </nuxt-link>

      <span class="navbar-burger burger" :class="{ 'is-active': isMenuActive }" @click="isMenuActive = !isMenuActive">
        <span></span>
      <span></span>
      <span></span>
      </span>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/events">
          <b-icon icon="event"></b-icon> Events
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/clubs">
          <b-icon icon="group"></b-icon> Clubs
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/about">
          <b-icon icon="face"></b-icon> About
        </nuxt-link>
      </div>

      <div class="navbar-end">
        <b-dropdown v-if="!currentUser" position="is-bottom-left">
          <a class="navbar-item" slot="trigger">
            <span>Login</span>
            <b-icon icon="face"></b-icon>
          </a>
          <b-dropdown-item custom paddingless>
            <form v-on:submit.prevent>
              <div class="modal-card">
                <section class="modal-card-body">
                  <b-field label="Email">
                    <b-input v-model="user.email" type="email" placeholder="Your email" required />
                  </b-field>
                  <b-field label="Password">
                    <b-input v-model="user.password" type="password" password-reveal placeholder="Your password" required />
                  </b-field>
                  <p class="help is-danger" v-if="error">{{ error }}</p>
                  <b-checkbox>Remember me</b-checkbox>
                </section>
                <footer class="modal-card-foot">
                  <button @click="signIn" class="button is-primary">Sign In</button>
                </footer>
              </div>
            </form>
          </b-dropdown-item>
        </b-dropdown>

        <b-dropdown v-else position="is-bottom-left">
          <a class="navbar-item" slot="trigger">
            <span>Hello {{ currentUser }}</span>
            <b-icon icon="face"></b-icon>
          </a>
          <b-dropdown-item @click="signOut">Logout</b-dropdown-item>
        </b-dropdown>
      </div>

    </div>
  </nav>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'

export default {
  components: {},
  computed: {
    ...mapGetters({
      'currentUser': 'auth/currentUser',
      'error': 'auth/error'
    })
  },
  data () {
    return {
      isMenuActive: false,
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      this.$store.dispatch('auth/signIn', {
        user: this.user
      })
    },
    ...mapActions({
      signOut: 'auth/signOut'
    })
  }
}
</script>

<style scoped>
.modal-card {
  width: 300px;
}
</style>
