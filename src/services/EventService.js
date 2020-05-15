import axios from 'axios'
// import NProgress from 'nprogress'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false, // This is default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

//Learnin1g Axios interceptor
// apiClient.interceptors.request.use(config => {
//   NProgress.start()
//   return config
// })

// apiClient.interceptors.response.use(response => {
//   NProgress.done()
//   return response
// })

export default {
  getEvents(page, limit) {
    return apiClient.get('/events?_page=' + page + '&_limit=' + limit)
  },

  getEvent(id) {
    return apiClient.get('/events/' + id)
  },

  postEvent(event) {
    return apiClient.post('/events', event)
  }
}
