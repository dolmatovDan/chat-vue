<template>
  <div v-on:message="createMessage" class="">
    <Group :messages="messages" />
    <MsgInput />
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
        },
        {
          text: "How are you?",
          avatar: "Terry.png",
          name: "Robert",
          time: "Sun Mar 14 2021 15:32:20 GMT+0300 (Москва, стандартное время)",
        },
      ],
    };
  },
  methods: {
    createMessage: function() {
      this.messages += {
        text: "",
        avatar: "Angela.png",
        name: "My",
        time: "Sun Mar 14 2021 15:32:20 GMT+0300 (Москва, стандартное время)",
      };
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
  flex-grow: 1;
  background-color: #f8fafd;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #eaedf3;
}

.chat__dialogue {
  display: flex;
  flex-direction: column;
  padding: 30px;
  max-height: 100%;
  overflow: auto;
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

.chat__messageInput {
  width: 100%;
  height: 100%;
  border: none;
  padding: 20px 30px;
  font-size: 14px;
  line-height: 1.43;
  color: #9ba4b0;
}

.chat__header {
  background-color: #fff;
  height: 44px;
  border-bottom: 1px solid #eaedf3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
}

.chat__messageInput {
  padding-right: 150px;
}
</style>
