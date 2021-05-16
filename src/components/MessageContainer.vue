<template>
  <div class="">
    <div class="chat">
      <Group :messages="messagesQueues" />
      <MsgInput v-on:message="createAndSendMessage" />
    </div>
  </div>
</template>

<script>
import Group from "./Group.vue";
import MsgInput from "./MessageInput.vue";

const phrases = [
  "Hi Justin! We just wanted to welcome you to our team.",
  "We are all excited to have you, we loved the work that you showed us during your interview and you fit well with everyone on our team and company. If you have any questions feel free to ask and someone on the team will help you out.",
  "Since you were already working within the company for another position, it won’t long until you have access to all of our files.",
  "Hey Justin, I’m looking forward to working with you on some of the upcoming projects! But to answer your questions, yes we do have a separate group chat. I’m sure you’ll be added soon!",
];
const senders = [
  {
    name: "Victor",
    icon: "Victor.png",
  },
  {
    name: "Angela",
    icon: "Angela.png",
  },
  {
    name: "Terry",
    icon: "Terry.png",
  },
];

export default {
  name: "App",
  components: {
    Group,
    MsgInput,
  },
  props: {
    messagesQueues: Array,
    currentID: String,
  },
  data: function() {
    return {
      senders: [
        {
          name: "Victor",
          icon: "Victor.png",
        },
        {
          name: "Angela",
          icon: "Angela.png",
        },
        {
          name: "Terry",
          icon: "Terry.png",
        },
      ],
    };
  },
  methods: {
    createAndSendMessage: function(data) {
      const message = {
        text: data,
        avatar: "",
        name: "",
        time: this.getTime(),
        sender: "me",
      };
      const friendMessage = this.createSenderMessage();
      const id = this.currentID;
      this.$emit("addToQueue", {
        messages: [message],
        id,
      });
      setTimeout(() => {
        this.$emit("addToQueue", {
          messages: [friendMessage],
          id,
        });
      }, 2000);
    },
    genRandom: function(number) {
      return Math.trunc(Math.random() * number);
    },
    createSenderMessage: function() {
      const message = phrases[this.genRandom(phrases.length)];
      const sender = senders[this.genRandom(senders.length)];
      return {
        text: message,
        avatar: sender.icon,
        name: sender.name,
        time: this.getTime(),
        sender: "friend",
      };
    },
    getTime: function() {
      return new Date();
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
  width: 685px;
  flex-grow: 1;
  background-color: #f8fafd;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #eaedf3;
}
</style>
