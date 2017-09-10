<template>
  <div>
    <landing/>
    <SignUp/>
    <!-- <ImageCard/> -->
  </div>
</template>

<script>
import Landing from '~/components/Landing.vue'
import SignUp from '~/components/SignUp.vue'
import ImageCard from '~/components/ImageCard.vue'

export default {
  components: {
    Landing,
    SignUp,
    ImageCard
  }
}
</script>

<style>
</style>
