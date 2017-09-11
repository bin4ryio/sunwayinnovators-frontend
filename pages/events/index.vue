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
        <event-list></event-list>
      </div>
    </div>

  </div>
</template>

<script>
import EventList from '~/components/events/EventList'

export default {
  components: {
    EventList
  }
}
</script>
