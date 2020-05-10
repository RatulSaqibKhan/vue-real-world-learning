<template>
  <h1>Create an Event, {{ username }}</h1>
</template>

<script>
export default {
  name: 'EventCreate',
  computed: {
    username() {
      return this.$store.state.user.name
    }
  },
  data() {
    return {
      key: ''
    }
  }
}
</script>

<style></style>
