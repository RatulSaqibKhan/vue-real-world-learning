<template>
  <div>
    <h1>Create an Event, {{ userName }}</h1>
    <p>Created by, {{ userId }}</p>
    <h4>Categories</h4>
    <ul v-for="(category, index) in categories" :key="index">
      <li>{{ category }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EventCreate',
  computed: mapState({
    userName: state => state.user.name,
    userId: state => state.user.id,
    categories: state => state.categories
  }),
  data() {
    return {
      key: ''
    }
  }
}
</script>

<style></style>
