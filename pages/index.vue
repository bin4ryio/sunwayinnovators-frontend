<template>
  <div>
    <SignIn/>
    <SignUp/>
  </div>
</template>

<script>
import SignIn from '~/components/SignIn.vue'
import SignUp from '~/components/SignUp.vue'

export default {
  components: {
    SignIn,
    SignUp
  }
}
</script>

<style>
</style>
