import Vue from 'vue'
import Vuex from 'vuex'
import Snack from './snack'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    snack: Snack
  }
})
