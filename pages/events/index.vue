<template>
  <div>
    <div class="hero is-primary">
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
          <div class="column is-one-quarter" v-for="event in eventsPaginated">
            <EventCard :event="event"/>
          </div>
        </div>
        <b-pagination
          :total="events.length"
          :current.sync="currentPage"
          :per-page="filter.limit"
          @change="pageChange">
        </b-pagination>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EventCard from '~/components/EventCard'

export default {
  computed: {
    eventsPaginated () {
      return this.events.slice(this.filter.offset, (this.filter.offset + this.filter.limit))
    },
    ...mapGetters({
      events: 'events/events'
    })
  },
  components: {
    EventCard
  },
  data () {
    return {
      currentPage: 1,
      filter: {
        limit: 8,
        offset: 0
      }
    }
  },
  methods: {
    pageChange (page) {
      this.currentPage = page
      this.filter.offset = ((this.currentPage - 1) * this.filter.limit)
    },
    ...mapActions({
      getEvents: 'events/getEvents'
    })
  },
  mounted () {
    this.getEvents()
  }
}
</script>
