<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="data.thumbnailUrl" alt="Image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="data.thumbnailUrl" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ data.title }}</p>
        </div>
      </div>

      <div class="content">
        <p>{{ data.url }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: false
    }
  }
}
</script>
