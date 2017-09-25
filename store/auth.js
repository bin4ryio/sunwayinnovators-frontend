import { getUserFromLocalStorage, setToken, unsetToken } from '~/utils/auth'

export const state = () => ({
  error: null,
  user: null
})

export const getters = {
  error: state => state.error,
  user: state => state.user,
  currentUser: state => state.user ? state.user.email : ''
}

export const actions = {

  async signIn ({ commit, dispatch }, { user }) {
    try {
      await this.axios.post('users/sign_in', {
        user
      })
      .then((res) => {
        let token = res.headers.authorization
        setToken(token)
        let user = getUserFromLocalStorage()
        commit('SET_USER', user)
        dispatch('clearError')
      })
    } catch (err) {
      dispatch('setError', err.response.data.error)
    }
  },

  async signUp ({ commit, dispatch }, { user }) {
    try {
      await this.axios.post('users', {
        user
      })
      .then((res) => {
        let token = res.headers.authorization
        setToken(token)
        let user = getUserFromLocalStorage()
        commit('SET_USER', user)
        dispatch('clearError')
      })
    } catch (err) {
      dispatch('setError', err.response.data.error)
    }
  },

  async signOut ({ commit, dispatch }) {
    try {
      unsetToken()
      commit('CLEAR_USER')
      // TODO
      // await this.axios.delete('users/sign_out', {
      // })
      // .then((res) => {
      //   unsetToken()
      //   commit('CLEAR_USER')
      // })
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
  SET_ERROR (state, payload) {
    state.error = payload
  },
  SET_USER (state, payload) {
    state.user = payload || null
  },
  CLEAR_ERROR (state) {
    state.error = null
  },
  CLEAR_USER (state) {
    state.user = null
  }
}
