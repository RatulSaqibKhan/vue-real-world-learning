import EventService from '@/services/EventService.js'

export const namespaced = true

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
  createEvent({ commit, dispatch }, event) {
    return EventService.postEvent(event)
      .then(() => {
        commit('ADD_EVENT', event)
        const notification = {
          type: 'success',
          message: 'The event is created successfully'
        }

        dispatch('notificationModule/add', notification, { root: true })
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem creating event: ' + error.message
        }

        dispatch('notificationModule/add', notification, { root: true })
        throw error
      })
  },

  fetchEvents({ commit, dispatch }, { page, limit }) {
    EventService.getEvents(page, limit)
      .then(response => {
        commit('SET_EVENTS_TOTAL', response.headers['x-total-count'])
        commit('SET_EVENTS', response.data)
        return response.data
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching events: ' + error.message
        }

        dispatch('notificationModule/add', notification, { root: true })
      })
  },

  fetchEvent({ commit, getters, dispatch }, id) {
    var event = getters.getEventById(id)

    if (event) {
      commit('SET_EVENT', event)
      return event
    } else {
      return EventService.getEvent(id)
        .then(response => {
          commit('SET_EVENT', response.data)
          return response.data
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message: 'There was a problem fetching event: ' + error.message
          }

          dispatch('notificationModule/add', notification, { root: true })
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
