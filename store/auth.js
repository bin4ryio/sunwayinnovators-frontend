import { getUserFromLocalStorage, setToken, unsetToken } from '~/utils/auth'
import { apiURL, httpPost } from '../utils/http'

export const state = () => ({
  authError: null,
  authUser: null
})

export const getters = {
  authError: state => state.authError,
  authUser: state => state.authUser
}

export const actions = {
  login ({ commit, dispatch }, { email, password }) {
    return httpPost(`${apiURL}/auth/login`, {
      email,
      password
    })
    .then((res) => {
      setToken(res.data.data.access_token)
      const loggedUser = getUserFromLocalStorage()
      commit('auth/SET_AUTH_USER', loggedUser, { root: true })
      dispatch('clearAuthError')
    })
    .catch((error) => {
      error.response.json()
      .then(errorJSON => {
        dispatch('setAuthError', errorJSON.data)
      })
    })
  },

  logout ({ commit }) {
    unsetToken()
    commit('CLEAR_AUTH_USER')
  },

  setAuthError ({ commit }, error) {
    commit('SET_AUTH_ERROR', error)
    setTimeout(() => {
      commit('CLEAR_AUTH_ERROR')
    }, 3000)
  },

  clearAuthError ({ commit }) {
    commit('CLEAR_AUTH_ERROR')
  }
}

export const mutations = {
  SET_ACCESS_TOKEN (state, payload) {
    state.accessToken = payload
  },
  SET_AUTH_ERROR (state, payload) {
    state.authError = payload
  },
  SET_AUTH_USER (state, payload) {
    state.authUser = payload
  },
  CLEAR_AUTH_USER (state) {
    state.authUser = null
  },
  CLEAR_AUTH_ERROR (state) {
    state.authError = null
  }
}
