<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>Created by, {{ user.id }}</p>
    <h4>There are {{ catLength }} categories:</h4>
    <ul v-for="(category, index) in categories" :key="index">
      <li>{{ category }}</li>
    </ul>
    <p>Event {{ getEvent(1) }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EventCreate',
  computed: {
    catLength() {
      return this.$store.getters.categoryLength
    },
    getEvent() {
      return this.$store.getters.getEventById
    },
    ...mapState(['user', 'categories'])
  },
  data() {
    return {
      key: ''
    }
  }
}
</script>

<style></style>
