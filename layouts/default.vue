<template>
  <div>
    <navbar/>
    <nuxt/>
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
</style>
