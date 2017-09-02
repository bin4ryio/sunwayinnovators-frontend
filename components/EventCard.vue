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
          <p class="title is-4">{{ event.name }}</p>
          <p class="subtitle is-6">Sunway Tech Club</p>
        </div>
      </div>

      <div class="content">
        <p>{{ event.content }}</p>
        <br>
        <small>11:09 PM - 1 Jan 2016</small>
      </div>
    </div>
    <div class="card-footer">
      <nuxt-link :to="'/events/'+id" class="card-footer-item">Detail</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  }
}
</script>
