<template>
  <div>
    <h1>Event Listing</h1>
    <EventCard />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
import axios from 'axios'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      key: ''
    }
  },
  created() {
    axios
      .get('http://localhost:3000/events')
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(`There was an error: ${error.response}`)
      })
  }
}
</script>

<style></style>
