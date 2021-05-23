<template>
  <div id="app" class="app">
    <SocialNetwork />
  </div>
</template>

<script>
import SocialNetwork from "./components/SocialNetwork.vue";

export default {
  name: "App",
  components: {
    SocialNetwork,
  },
};
</script>

<style>
.app {
  display: flex;
  justify-content: center;
  font-family: Trebuchet MS;
  padding: 15px;
}
</style>
