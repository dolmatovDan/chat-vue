<template>
  <div class="">
    <div class="">
      <Message
        v-for="(msg, key) in messages"
        :key="key"
        :text="msg.text"
        :avatar="msg.avatar"
        :time="msg.time"
        :name="msg.name"
      />
    </div>
  </div>
</template>

<script>
import Message from "./Message.vue";

export default {
  name: "App",
  components: {
    Message,
  },
  props: {
    messages: Array,
  },
};
</script>

<style></style>
