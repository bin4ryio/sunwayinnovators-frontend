<template>
  <div class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ event.attributes.name }}
        </h1>
        <h2 class="subtitle">
          {{ event.attributes.content }}
        </h2>
        <p class="help is-danger" v-if="error">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  fetch ({ store, params }) {
    if (store.state.events.event.id !== params.id) {
      store.dispatch('events/getEvent', {
        id: params.id
      })
    }
    return store.state.events.event
  },
  computed: {
    ...mapGetters({
      event: 'events/event',
      error: 'events/error'
    })
  },
  methods: {
    ...mapActions({
      getEvent: 'events/getEvent'
    })
  }
}
</script>

<style>
</style>
