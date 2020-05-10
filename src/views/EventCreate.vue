<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>Created by, {{ user.id }}</p>
    <h4>There are {{ categoryLength }} categories:</h4>
    <ul v-for="(category, index) in categories" :key="index">
      <li>{{ category }}</li>
    </ul>
    <p>Event {{ getEventById(4) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'EventCreate',
  computed: {
    ...mapState(['user', 'categories']),
    ...mapGetters(['categoryLength', 'getEventById'])
  },
  data() {
    return {
      key: ''
    }
  }
}
</script>

<style></style>
