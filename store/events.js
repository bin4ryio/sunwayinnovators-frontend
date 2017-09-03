// import { getUserFromLocalStorage } from '~/utils/auth'

export const state = () => ({
  event: {},
  events: [],
  error: ''
})

export const getters = {
  event: state => state.event,
  events: state => state.events,
  error: state => state.error
}

export const actions = {

  async getEvent ({ commit, dispatch }, { id }) {
    try {
      await this.$axios.$get(`events/${id}`)
      .then((res) => {
        console.log(res.data)
        commit('SET_EVENT', res.data)
        dispatch('clearError')
      })
    } catch (err) {
      dispatch('setError', err.response.data.error)
    }
  },

  async getEvents ({ commit, dispatch }) {
    try {
      await this.$axios.$get('events')
      .then((res) => {
        commit('SET_EVENTS', res.data)
        dispatch('clearError')
      })
    } catch (err) {
      dispatch('setError', err.response.data.error)
    }
  },

  setError ({ commit }, error) {
    commit('SET_ERROR', error)
    setTimeout(() => {
      commit('CLEAR_ERROR')
    }, 10000)
  },

  clearError ({ commit }) {
    commit('CLEAR_ERROR')
  }
}

export const mutations = {
  SET_EVENT (state, payload) {
    state.event = payload
  },
  SET_EVENTS (state, payload) {
    state.events = payload
  },
  SET_ERROR (state, payload) {
    state.error = payload
  },
  CLEAR_ERROR (state) {
    state.error = null
  }
}
