<template>
  <div id="app" class="app">
    <MessageContainer />
  </div>
</template>

<script>
import MessageContainer from "./components/MessageContainer.vue";

export default {
  name: "App",
  components: {
    MessageContainer,
  },
};
</script>

<style>
.app {
  display: flex;
  justify-content: center;
  font-family: Trebuchet MS;
}
</style>
