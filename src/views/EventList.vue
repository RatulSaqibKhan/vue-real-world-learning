<template>
  <div>
    <h1>Event List</h1>
    <router-link :to="{ name: 'EventShow', params: { id: '1' } }"
      >Event Show #1</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: ''
    }
  }
}
</script>

<style></style>
