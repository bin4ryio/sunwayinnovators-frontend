export const ALL_EVENTS = 'ALL_EVENTS'
export const ALL_EVENTS_SUCCESS = 'ALL_EVENTS_SUCCESS'
export const EVENT_BY_ID = 'EVENT_BY_ID'
export const EVENT_BY_ID_SUCCESS = 'EVENT_BY_ID_SUCCESS'

export const state = () => ({
  event: {},
  events: [],
  error: null,
  loading: false
})

export const getters = {
  allEvents: (state) => {
    return state.events
  },
  eventById: (state, getters) => id => {
    if (getters.allEvents.length > 0) {
      return getters.allEvents.filter(e => e.id === id)[0]
    } else {
      return state.event
    }
  }
}

export const mutations = {
  [ALL_EVENTS] (state) {
    state.loading = true
  },
  [ALL_EVENTS_SUCCESS] (state, payload) {
    state.loading = false
    state.events = payload
  },
  [EVENT_BY_ID] (state) {
    state.loading = true
  },
  [EVENT_BY_ID_SUCCESS] (state, payload) {
    state.loading = false
    state.event = payload
  }
}

export const actions = {
  async allEvents ({ commit }) {
    commit(ALL_EVENTS)
    try {
      const { data } = await this.$axios.$get('events')
      commit(ALL_EVENTS_SUCCESS, data)
    } catch (err) {
      console.error(err)
    }
  },
  async eventById ({ commit }, payload) {
    commit(EVENT_BY_ID)
    try {
      const { data } = await this.$axios.$get(`events/${payload}`)
      commit(EVENT_BY_ID_SUCCESS, data)
    } catch (err) {
      console.error(err)
    }
  }
}
