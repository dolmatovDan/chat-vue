<template>
  <div class="">
    <div class="group">
      <Message
        v-for="(msg, key) in messages"
        :key="key"
        :text="msg.text"
        :avatar="msg.avatar"
        :time="msg.time"
        :name="msg.name"
        :sender="msg.sender"
      />
    </div>
  </div>
</template>

<script>
import Message from "./Message.vue";

export default {
  name: "Group",
  components: {
    Message,
  },
  props: {
    messages: Array,
  },
  data: function() {
    return {};
  },
};
</script>

<style>
.group {
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  box-sizing: border-box;
}
</style>
