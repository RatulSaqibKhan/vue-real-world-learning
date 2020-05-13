import EventService from '@/services/EventService.js'

const state = {
  events: [],
  eventsTotal: 0,
  event: {}
}
const mutations = {
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
}

const actions = {
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
}

const getters = {
  getEventById: state => id => {
    return state.events.find(event => event.id === id)
  }
}

export { state, mutations, actions, getters }