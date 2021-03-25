<template>
  <div class="">
    <div class="chat">
      <Group :messages="messages" />
      <MsgInput v-on:message="createMessage" />
    </div>
  </div>
</template>

<script>
import Group from "./Group.vue";
import MsgInput from "./MessageInput.vue";

export default {
  name: "App",
  components: {
    Group,
    MsgInput,
  },
  data: function() {
    return {
      messages: [
        {
          text: "Hello",
          avatar: "Angela.png",
          name: "Terry",
          time: "Sun Mar 14 2021 15:32:20 GMT+0300 (Москва, стандартное время)",
          sender: "friend",
        },
        {
          text: "How are you?",
          avatar: "Terry.png",
          name: "Robert",
          time: "Sun Mar 14 2021 15:32:20 GMT+0300 (Москва, стандартное время)",
          sender: "friend",
        },
      ],
    };
  },
  methods: {
    createMessage: function(data) {
      this.messages.push({
        text: data,
        avatar: "",
        name: "",
        time: "Sun Mar 14 2021 15:32:20 GMT+0300 (Москва, стандартное время)",
        sender: "me",
      });
    },
  },
};
</script>

<style>
.button {
  border: none;
  background-color: transparent;
}

.button--send {
  color: rgb(92, 92, 92);
  background-color: rgb(248, 248, 248);
  padding: 23px 13px;
}

.chat-widnow {
  height: 100vh;
  width: 1280px;
  margin: 0 auto;
  display: flex;
}

.chat {
  width: 60vw;
  flex-grow: 1;
  background-color: #f8fafd;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #eaedf3;
}
</style>
