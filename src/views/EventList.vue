<template>
  <div>
    <h1>Event List for {{ userModule.user.name }}</h1>
    <EventCard
      v-for="event in eventModule.events"
      :key="event.id"
      :event="event"
    />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        >Prev Page</router-link
      >
    </template>
    <template v-if="page > 1 && hasNextPage">
      |
    </template>
    <template v-if="hasNextPage">
      <router-link
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        >Next Page</router-link
      >
    </template>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
import { mapState } from 'vuex'
import store from '@/store'

function getPageEvents(routeTo, next) {
  const currentPage = parseInt(routeTo.query.page) || 1
  store
    .dispatch('eventModule/fetchEvents', {
      page: currentPage
    })
    .then(() => {
      routeTo.params.page = currentPage
      next()
    })
}

export default {
  name: 'EventList',
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    EventCard
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next)
  },
  computed: {
    hasNextPage() {
      return (
        this.eventModule.eventsTotal > this.page * this.eventModule.perPageLimit
      )
    },
    ...mapState(['eventModule', 'userModule'])
  }
}
</script>

<style scoped></style>
