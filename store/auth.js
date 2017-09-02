import { getUserFromLocalStorage, setToken, unsetToken } from '~/utils/auth'

export const state = () => ({
  authError: null,
  authUser: null
})

export const getters = {
  authError: state => state.authError,
  authUser: state => state.authUser,
  currentUser: state => state.authUser ? state.authUser['email'] : ''
}

export const actions = {

  async signIn ({ commit, dispatch }, { user }) {
    try {
      const res = await this.axios.post('users/sign_in', {
        user
      })
      .then((res) => {
        let token = res.headers.authorization
        setToken(token)
        let user = getUserFromLocalStorage()
        commit('SET_AUTH_USER', user)
        dispatch('clearAuthError')
      })
    } catch (err) {
      dispatch('setAuthError', err.response.data.error)
    }
  },

  async signUp ({ commit, dispatch }, { user }) {
    try {
      const res = await this.axios.post('users', {
        user
      })
      .then((res) => {
        let token = res.headers.authorization
        setToken(token)
        let user = getUserFromLocalStorage()
        commit('SET_AUTH_USER', user)
        dispatch('clearAuthError')
      })
    } catch (err) {
      dispatch('setAuthError', err.response.data.error)
    }
  },

  async signOut ({ commit }) {
    // try {
    //   const res = await this.axios.delete('users/sign_out', {
    //   })
    //   .then((res) => {
    //     unsetToken()
    //     commit('CLEAR_AUTH_USER')
    //   })
    // } catch (err) {
    // }
  },

  setAuthError ({ commit }, error) {
    commit('SET_AUTH_ERROR', error)
    setTimeout(() => {
      commit('CLEAR_AUTH_ERROR')
    }, 10000)
  },

  clearAuthError ({ commit }) {
    commit('CLEAR_AUTH_ERROR')
  }
}

export const mutations = {
  SET_AUTH_ERROR (state, payload) {
    state.authError = payload
  },
  SET_AUTH_USER (state, payload) {
    state.authUser = payload || null
  },
  CLEAR_AUTH_USER (state) {
    state.authUser = null
  },
  CLEAR_AUTH_ERROR (state) {
    state.authError = null
  }
}
