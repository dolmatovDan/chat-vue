<template>
  <div class="socialNetwork">
    <Dialogues :activeDialogue="getID" :messagesQueues="messagesQueues" />
    <MessageContainer
      :currentID="getID"
      :messagesQueues="getMessages()"
      v-on:addToQueue="addToQueue"
    />
    <Modal v-show="!isLogin" />
    <SignUpModal v-show="isWantSignUp" />
  </div>
</template>

<script>
import MessageContainer from "./MessageContainer.vue";
import SignUpModal from "./SignUpModal.vue";
import Dialogues from "./Dialogues.vue";

import Modal from "./Modal.vue";

export default {
  name: "SocialNetwork",
  components: {
    SignUpModal,
    MessageContainer,
    Dialogues,
    Modal,
  },
  mounted() {
    fetch("http://localhost:8000/").then((data) => {
      return data.json();
    });
  },

  data: function() {
    return {};
  },
  methods: {
    addToQueue: function({ messages, id }) {
      this.$store.commit("chat/addMessageToQueue", { messages, id });
    },
    getMessages: function() {
      return this.$store.getters["chat/getMessagesByDialogueID"](this.getID);
    },
  },
  computed: {
    messagesQueues: function() {
      return this.$store.getters["chat/getMessagesQueue"];
    },
    getID: function() {
      return this.$store.getters["chat/getActiveID"];
    },
    isLogin: function() {
      return this.$store.getters["auth/getIsLogin"];
    },
    isWantSignUp: function() {
      return this.$store.getters["auth/getWantSignUp"];
    },
  },
};
</script>

<style>
.socialNetwork {
  display: flex;
}
</style>
