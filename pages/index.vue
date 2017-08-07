<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        Sunway Innovators
      </h1>
      <Login/>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Login from '~/components/Login.vue'

export default {
  components: {
    Logo,
    Login
  }
}
</script>

<style>
body {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
.container
{
  display: flex;
  padding-top: 40px;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 72px;
  color: #35495e;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
