import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "@/mixins/gb"
import router from './router'
import store from './store'
import { appService,exploreService } from './service/api'
import { gsap } from 'gsap'
import VueCookies from 'vue-cookies'
import { TextPlugin } from "gsap/TextPlugin";
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import './style/main.scss'

Vue.config.productionTip = false
gsap.registerPlugin(TextPlugin)
Vue.prototype.gsap = gsap
Vue.prototype.appService = appService
Vue.prototype.exploreService = exploreService

Vue.use(VueCookies)
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
