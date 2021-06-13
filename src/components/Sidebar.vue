<template>
  <div id="sidebar" class="sidebar">
    <p>New Team Member</p>
    <button @click="logOut" class="button--log-out">Log Out</button>
  </div>
</template>

<script>
import UserService from "../services/UserService";
export default {
  name: "Sidebar",
  components: {},
  methods: {
    logOut: function() {
      this.$store.commit("auth/changeIsLogin", false);
      UserService.logOut();
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.sidebar {
  display: flex;
  justify-content: space-between;

  width: 100%;
  background-color: #fff;
  padding: 5px;
  border-bottom: 1px solid #eaedf3;
  padding-left: 15px;
  padding-right: 15px;
}
.button--log-out {
  padding: 10px;
  font-size: 16px;
  border: none;
  border-left: 1px solid #eaedf3;
  border-right: 1px solid #eaedf3;
  cursor: pointer;
  background-color: transparent;
}
</style>
