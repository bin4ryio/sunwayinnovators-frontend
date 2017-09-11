<template>
  <div class="section is-primary">
    <div class="container">
      <h1 class="title">Event Detail</h1>
      <event-detail :event="event($route.params.id)" :isAdding="true" ></event-detail>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EventDetail from '~/components/events/EventDetail.vue'

export default {
  async fetch ({ store, params }) {
    if (!this.event) {
      await store.dispatch('events/eventById', params['id'])
    }
  },
  computed: {
    ...mapGetters({
      event: 'events/eventById'
    })
  },
  components: {
    EventDetail
  }
}
</script>

<style>
</style>
