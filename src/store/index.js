import Vue from 'vue'
import Vuex from 'vuex'
import Snack from './snackControl/snackControl'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    snack: Snack
  }
})
