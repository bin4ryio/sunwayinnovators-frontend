<template>
  <div>
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Events
          </h1>
          <h2 class="subtitle">
            Explore events around campus
          </h2>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-one-third" v-for="event in events">
            <EventCard :id="event.id" :event="event.attributes"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EventCard from '~/components/EventCard'

export default {
  computed: {
    ...mapGetters({
      events: 'events/events'
    })
  },
  components: {
    EventCard
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions({
      getEvents: 'events/getEvents'
    })
  },
  mounted () {
    this.getEvents()
  }
}
</script>
