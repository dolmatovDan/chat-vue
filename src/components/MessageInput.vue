<template>
  <div class="">
    <div class="chat__container">
      <input
        v-model="message"
        placeholder="Type a message. . ."
        type="text"
        id="messageInput"
        class="chat__messageInput"
      />
      <div class="chat__send-place">
        <button class="chat__icon button"></button>
        <button class="chat__icon button"></button>
        <button
          v-on:click="sendMessage"
          id="messageButton"
          class="button button--send"
        >
          Отправить
        </button>
      </div>
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
      this.$emit("message", this.message);
    },
  },
};
</script>

<style></style>
