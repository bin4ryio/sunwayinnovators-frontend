<template>
  <div>
    <div class="events">
      <div class="container">
        <template v-for="event in events">
          <event-item :event="event" ></event-item>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EventItem from '~/components/events/EventItem'

export default {
  created () {
    if (this.events.length === 0) {
      this.$store.dispatch('events/allEvents')
    }
  },
  computed: {
    ...mapGetters({
      events: 'events/allEvents'
    })
  },
  components: {
    EventItem
  }
}
</script>
