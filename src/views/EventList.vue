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

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('eventModule/fetchEvents', {
      page: this.page,
      limit: 3
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    hasNextPage() {
      return this.eventModule.eventsTotal > this.page * 3
    },
    ...mapState(['eventModule', 'userModule'])
  }
}
</script>

<style scoped></style>
