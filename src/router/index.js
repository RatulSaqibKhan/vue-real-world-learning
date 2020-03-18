import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../views/EventList.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'EventShow',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (event.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "event" */ '../views/EventShow.vue')
  },
  {
    path: '/event/create',
    name: 'EventCreate',
    // route level code-splitting
    // this generates a separate chunk (event.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "event" */ '../views/EventCreate.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
