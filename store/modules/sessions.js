import uniqueId from 'uniqid'
import * as types from '../mutation-types'
import {
  apiURL,
  httpGet,
  httpPost,
  httpUpdate,
  httpDelete
} from '../../utils'

const state = {
  currentUser: null,
  sessionError: null,
  registrationErrors: {},
  changePasswordErrors: {}
}

const getters = {
  currentUser: state => state.currentUser,
  sessionError: state => state.sessionError,
  registrationErrors: state => state.registrationErrors,
  changePasswordErrors: state => state.changePasswordErrors
}

const actions = {
  signIn ({ commit, dispatch }, session) {
    return httpPost(`${apiURL}/sessions`, { session })
      .then(({ jwt, user }) => {
        localStorage.setItem('token', jwt)
        commit(types.SET_CURRENT_USER, { ...user, jwt })
        commit(types.CLEAR_SESSION_ERROR)
        dispatch('toggleAuthWidget')
      })
      .catch((error) => {
        error.response.json()
        .then((errorJSON) => {
          dispatch('setSessionError', errorJSON.message)
        })
      })
  },

  changePassword ({ commit, dispatch }, session) {
    return httpUpdate(`${apiURL}/sessions`, { session })
      .then((resp) => {
        dispatch('clearChangePasswordErrors')
        dispatch('toggleAuthWidget')
        dispatch('setAuthView', 'logout')
        dispatch('addAlert', {
          id: uniqueId('alert_'),
          type: 'success',
          message: 'Password changed succesfully!'
        })
      })
      .catch((error) => {
        error.response.json()
        .then((errorJSON) => {
          commit(types.SET_CHANGE_PASSWORD_ERRORS, errorJSON.errors)
        })
      })
  },

  signOut ({ commit, dispatch }) {
    return httpDelete(`${apiURL}/sessions`)
      .then((_) => {
        localStorage.removeItem('token')
        commit(types.USER_SIGNED_OUT)
      })
  },

  signUp ({ commit, dispatch }, user) {
    return httpPost(`${apiURL}/registrations`, { user })
      .then(({ jwt, user }) => {
        localStorage.setItem('token', jwt)
        commit(types.SET_CURRENT_USER, { ...user, jwt })
        dispatch('clearRegistrationErrors')
        dispatch('toggleAuthWidget')
      })
      .catch((error) => {
        error.response.json()
        .then((errorJSON) => {
          commit(types.SET_REGISTRATIONS_ERRORS, errorJSON.errors)
        })
      })
  },

  currentUser ({ commit }) {
    return httpGet(`${apiURL}/current_user`)
      .then(({ user }) => {
        const jwt = localStorage.getItem('token')
        commit(types.SET_CURRENT_USER, { ...user, jwt })
      })
  },

  setSessionError ({ commit }, error) {
    commit(types.SET_SESSION_ERROR, error)
    setTimeout(() => {
      commit(types.CLEAR_SESSION_ERROR)
    }, 3000)
  },

  clearSessionError ({ commit }) {
    commit(types.CLEAR_SESSION_ERROR)
  },

  clearChangePasswordErrors ({ commit }) {
    commit(types.CLEAR_CHANGE_PASSWORD_ERRORS)
  },

  clearRegistrationErrors ({ commit }) {
    commit(types.CLEAR_REGISTRATIONS_ERRORS)
  }
}

const mutations = {
  [types.SET_CURRENT_USER] (state, user) {
    state.currentUser = { ...state.currentUser, ...user }
  },

  [types.USER_SIGNED_OUT] (state) {
    state.currentUser = null
  },

  [types.SET_SESSION_ERROR] (state, error) {
    state.sessionError = error
  },

  [types.CLEAR_SESSION_ERROR] (state) {
    state.sessionError = null
  },

  [types.SET_REGISTRATIONS_ERRORS] (state, errors) {
    state.registrationErrors = errors
  },

  [types.CLEAR_REGISTRATIONS_ERRORS] (state) {
    state.registrationErrors = {}
  },

  [types.SET_CHANGE_PASSWORD_ERRORS] (state, errors) {
    state.changePasswordErrors = errors
  },

  [types.CLEAR_CHANGE_PASSWORD_ERRORS] (state) {
    state.changePasswordErrors = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
