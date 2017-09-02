<template>
    <div class="container">
      <section>
      <div class="columns is-multiline">
        <div class="column" v-for="photo of tooManyPhotos">
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
      return this.photos.slice(0, 12)
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
