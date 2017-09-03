<template>
  <div class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Add event
        </h1>
        <h2 class="subtitle">
          <nuxt-link to="/">Back to the home page</nuxt-link>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
