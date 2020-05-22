import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../views/EventList.vue'
import NProgress from 'nprogress'
import store from '@/store'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: true
  },
  {
    path: '/event/create',
    name: 'EventCreate',
    // route level code-splitting
    // this generates a separate chunk (event.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "event" */ '../views/EventCreate.vue')
  },
  {
    path: '/event/:id',
    name: 'EventShow',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (event.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "event" */ '../views/EventShow.vue'),
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch('eventModule/fetchEvent', routeTo.params.id)
        .then(event => {
          routeTo.params.event = event
          next()
        })
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// GLobal Route Guard
router.beforeEach((routeTo, touteFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
