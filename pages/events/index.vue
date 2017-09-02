<template>
  <div class="section is-medium">
    <div class="container">

      <div class="columns">
        <div class="column is-one-forth" v-for="photo of tooManyPhotos">
          <ImageCard :data="photo"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ImageCard from '~/components/ImageCard'
import axios from 'axios'

export default {
  components: {
    ImageCard
  },

  computed: {
    tooManyPhotos () {
      return this.photos.slice(0, 20)
    }
  },

  data () {
    return {
      photos: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created () {
    axios.get(`http://jsonplaceholder.typicode.com/photos`)
      .then(response => {
        this.photos = response.data
        // console.log(this.photos)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
