import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'

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
    events: [],
    eventsTotal: 0,
    event: {}
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, event) {
      state.events = event
    },
    SET_EVENT(state, event) {
      state.event = event
    },
    SET_EVENTS_TOTAL(state, eventsTotal) {
      state.eventsTotal = eventsTotal
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    },

    fetchEvents({ commit }, { page, limit }) {
      EventService.getEvents(page, limit)
        .then(response => {
          commit('SET_EVENTS_TOTAL', response.headers['x-total-count'])
          commit('SET_EVENTS', response.data)
        })
        .catch(error => {
          console.log(`There was an error: ${error.response}`)
        })
    },

    fetchEvent({ commit, getters }, id) {
      var event = getters.getEventById(id)

      if (event) {
        commit('SET_EVENT', event)
      } else {
        EventService.getEvent(id)
          .then(response => {
            commit('SET_EVENT', response.data)
          })
          .catch(error => {
            console.log(`There is some error: ${error.response}`)
          })
      }
    }
  },
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
