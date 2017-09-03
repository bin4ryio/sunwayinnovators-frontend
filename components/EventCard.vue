<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ event.attributes.name }}</p>
          <p class="subtitle is-6">Sunway Tech Club</p>
        </div>
      </div>

      <div class="content">
        <p>{{ excerpt }}</p>
        <small>11:09 PM - 1 Jan 2016</small>
      </div>
    </div>
    <div class="card-footer">
      <nuxt-link :to="{ name: 'events-id', params: { id: event.id } }" class="card-footer-item">Detail</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    excerpt () {
      return this.event.attributes.content.substr(0, 100) + '...'
    }
  },
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>
