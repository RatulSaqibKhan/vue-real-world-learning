<template>
  <div>
    <h1>Create an Event</h1>
    <br />
    <form @submit.prevent="createEvent">
      <div class="field">
        <label>Select a category</label>
        <select v-model="event.category">
          <option v-for="category in categories" :key="category">{{
            category
          }}</option>
        </select>
      </div>

      <h3>Name &amp; describe event</h3>
      <div class="field">
        <label>Title</label>
        <input
          type="text"
          v-model="event.title"
          placeholder="Add an event title"
        />
      </div>

      <div class="field">
        <label>Description</label>
        <input
          type="text"
          v-model="event.description"
          placeholder="Add a description"
        />
      </div>

      <h3>Where is your event?</h3>

      <div class="field">
        <label>Location</label>
        <input
          type="text"
          v-model="event.location"
          placeholder="Add a location"
        />
      </div>

      <h3>When is your event?</h3>

      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date" />
      </div>

      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>

      <input type="submit" class="button --fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'EventCreate',
  components: {
    Datepicker
  },
  data() {
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      event: this.createFreshEvent(),
      times,
      categories: this.$store.state.categories
    }
  },

  methods: {
    createEvent() {
      this.$store
        .dispatch('createEvent', this.event)
        .then(() => {
          this.$router.push({
            name: 'EventShow',
            params: { id: this.event.id }
          })
          this.event = this.createFreshEvent
        })
        .catch(() => {})
    },

    createFreshEvent() {
      const user = this.$store.state.userModule.user
      const id = Math.floor(Math.random() * 10000000)

      return {
        id: id,
        user: user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      }
    }
  }
}
</script>

<style scoped>
.button {
  padding: 10px 23px;
  border-radius: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
}

.button:hover {
  box-shadow: 0 0 17px #16c0b0;
  border: 1px solid #84cf6a;
}

.--fill-gradient {
  background: linear-gradient(to bottom, #16c0b0, #84cf6a);
  color: #fff;
}

.field {
  margin-bottom: 24px;
}
</style>
