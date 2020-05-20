import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'sejskfbejdsjnelsknajkbfsdbjn'
  },
  mutations: {
    // 修改token的值
    setToken(state, msg) {
      state.token = msg
    }
  },
  actions: {
  },
  modules: {
  }
})
