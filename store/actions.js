import axios from 'axios'

let BASE_URL = 'https://euphoriamy.herokuapp.com/v1'

export default {
  login ({ commit }, creds) {
    commit('LOGIN')
    return new Promise(resolve => {
      axios.post(`${BASE_URL}/sessions`, {
        email: creds.email,
        password: creds.password
      })
      .then(response => {
        console.log(response)
        localStorage.setItem('token', response.data.data.user.authentication_token)
        commit('LOGIN_SUCCESS')
        resolve()
      })
      .catch(e => {
        console.log(e)
      })
    })
  },
  logout ({ commit }) {
    localStorage.removeItem('token')
    commit('LOGOUT')
  },
  register ({ commit }, creds) {
    commit('REGISTER')
    return new Promise(resolve => {
      axios.post(`${BASE_URL}/users`, {
        user: {
          email: creds.email,
          password: creds.password,
          password_confirmation: creds.password_confirmation,
          name: creds.name,
          account_type: 'customer'
        }
      })
      .then(response => {
        console.log(response)
        localStorage.setItem('token', response.data.data.user.authentication_token)
        commit('REGISTER_SUCCESS')
        resolve()
      })
      .catch(e => {
        console.log(e)
      })
    })
  }
}
