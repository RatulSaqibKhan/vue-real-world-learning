import Vue from 'vue'
import Vuex from 'vuex'
import * as userModule from '@/store/modules/user.js'
import * as eventModule from '@/store/modules/event.js'
import * as notificationModule from '@/store/modules/notification.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { userModule, eventModule, notificationModule },
  state: {
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'food',
      'education',
      'community'
    ]
  },
  mutations: {},
  actions: {},
  getters: {}
})
