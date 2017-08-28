import { getUserFromLocalStorage, setToken, unsetToken } from '~/utils/auth'

export const state = () => ({
  authError: null,
  authUser: null
})

export const getters = {
  accessToken: state => state.accessToken,
  authError: state => state.authError,
  authUser: state => state.authUser
}

export const actions = {

  signIn ({ commit, dispatch }, { axios, user }) {
    try {
      return axios.post('users/sign_in', {
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
      dispatch('setAuthError', err)
    }
  },

  signUp ({ commit, dispatch }, { axios, user }) {
    try {
      return axios.post('users', {
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
      dispatch('setAuthError', err)
    }
  },

  async signOut ({ commit }) {
    unsetToken()
    commit('CLEAR_AUTH_USER')
    // }
  },

  setAuthError ({ commit }, error) {
    commit('SET_AUTH_ERROR', error)
    setTimeout(() => {
      commit('CLEAR_AUTH_ERROR')
    }, 20000)
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
