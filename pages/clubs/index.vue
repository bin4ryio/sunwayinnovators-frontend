<template>
  <div class="container">
    <section>
      <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="photo in tooManyPhotos">
          <ImageCard :data="photo"/>
        </div>
      </div>
    </section>
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
      return this.photos.slice(0, 15)
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
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
