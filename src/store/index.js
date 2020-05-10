import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 1, name: 'Saqib' },
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
  modules: {},
  getters: {
    categoryLength: state => {
      return state.categories.length
    }
  }
})
