<template>
  <div class="">
    <div @keyup.enter="sendMessage" class="chat__container">
      <input
        v-model="message"
        placeholder="Type a message. . ."
        type="text"
        id="messageInput"
        class="chat__messageInput"
      />
      <div class="chat__send-place"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MsgInput",
  components: {},
  props: {},
  methods: {
    sendMessage: function() {
      if (this.message) {
        this.$emit("message", this.message);
        this.message = "";
      }
    },
  },
  data: function() {
    return {
      message: "",
    };
  },
};
</script>

<style>
.chat__messageInput {
  width: 100%;
  height: 30px;
  border: none;
  padding: 20px 30px;
  font-size: 14px;
  line-height: 1.43;
  color: #9ba4b0;
  padding-right: 150px;
}
.chat__container {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.chat__send-place {
  display: flex;
  width: 145px;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  right: 20px;
}

.chat__icon {
  width: 17px;
  height: 17px;
  margin-right: 20px;
  background-color: red;
  background-repeat: no-repeat;
  background-size: cover;
  flex-shrink: 0;
}
</style>
