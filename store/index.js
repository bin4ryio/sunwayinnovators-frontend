import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
// import posts from './modules/posts'
import sessions from './modules/sessions'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  // user: {
  //   name: '',
  //   email: '',
  //   isLoggedIn: !!localStorage.getItem('token')
  // }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    sessions
  },
  strict: debug
})
