<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to Sunway Innovators
          </h1>
          <h2 class="subtitle">
            Connect with students
          </h2>
          <b-icon icon="whatshot"></b-icon>
        </div>
      </div>
    </section>
    <sign-up/>
  </div>
</template>

<script>
import SignUp from '~/components/SignUp.vue'

export default {
  components: {
    SignUp
  }
}
</script>

<style>
</style>
