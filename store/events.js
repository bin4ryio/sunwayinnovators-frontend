import { getUserFromLocalStorage } from '~/utils/auth'

export const state = () => ({
  events: []
})

export const getters = {
  events: state => state.events
}

export const actions = {

  async getEvents ({ commit, dispatch }) {
    try {
      const res = await this.$axios.$get('events')
      .then((res) => {
        console.log(res.data)
        commit('GET_EVENTS', res.data)
      })
    } catch (err) {
      dispatch('setEventError', err.response.data.error)
    }
  }
}

export const mutations = {
  GET_EVENTS (state, payload) {
    state.events = payload
  }
}
