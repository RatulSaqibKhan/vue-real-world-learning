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
    ],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: false },
      { id: 4, text: '...', done: false },
      { id: 5, text: '...', done: true },
      { id: 6, text: '...', done: true }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    categoryLength: state => {
      return state.categories.length
    },

    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },

    activeTodosUsingGetter: (state, getters) => {
      return state.todos.length - getters.doneTodos.length
    },

    activeTodos: state => {
      return state.todos.filter(todo => !todo.done).length
    }
  }
})
