<template>
  <div class="event-details">
    <div class="container">
      <div class="event-details__description">
        <h3>{{ event.attributes.name }}</h3>
        <p>
          {{ event.attributes.content }}
        </p>
      </div>
      <div class="event-details__price-cart">
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['event']
  // props: {
  //   'event': {
  //     type: Object,
  //     required: true
  //   }
  // }
}
</script>
