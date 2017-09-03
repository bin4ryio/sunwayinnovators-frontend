<template>
  <div class="app">
    <navbar/>
    <main class="app-content">
      <nuxt/>
    </main>
    <foot/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Foot from '~/components/Foot'

export default {
  components: {
    Navbar,
    Foot
  }
}
</script>

<style>
.app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.app-content {
  flex: 1 0 auto;
}
</style>
