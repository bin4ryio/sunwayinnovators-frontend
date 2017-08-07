export default {
  LOGIN: (state) => {
    state.pending = true
  },
  LOGIN_SUCCESS: (state) => {
    state.user.isLoggedIn = true
    state.pending = false
  },
  LOGOUT: (state) => {
    state.user.isLoggedIn = false
  },
  REGISTER: (state) => {
    state.pending = true
  },
  REGISTER_SUCCESS: (state) => {
    state.user.isLoggedIn = true
    state.pending = false
  }
}
