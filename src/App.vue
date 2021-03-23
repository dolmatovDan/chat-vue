<template>
  <div id="app">
    <MessageContainer />
  </div>
</template>

<script>
import MessageContainer from './components/MessageContainer.vue'

export default {
  name: 'App',
  components: {
    MessageContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
