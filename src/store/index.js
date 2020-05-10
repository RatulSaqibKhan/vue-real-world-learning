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
    ],
    events: [
      { id: 1, title: '...', organizer: '...' },
      { id: 2, title: '...', organizer: '...' },
      { id: 3, title: '...', organizer: '...' },
      { id: 4, title: '...', organizer: '...' },
      { id: 5, title: '...', organizer: '...' }
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
    },

    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
