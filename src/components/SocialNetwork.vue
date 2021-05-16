<template>
  <div class="socialNetwork">
    <Dialogues
      :activeDialogue="activeID"
      :messagesQueues="messagesQueues"
      v-on:getID="changeID"
    />
    <MessageContainer
      :currentID="activeID"
      :messagesQueues="getMessages()"
      v-on:addToQueue="addToQueue"
    />
  </div>
</template>

<script>
import MessageContainer from "./MessageContainer.vue";
import Dialogues from "./Dialogues.vue";

export default {
  name: "SocialNetwork",
  components: {
    MessageContainer,
    Dialogues,
  },

  data: function() {
    return {
      activeID: "groupID1",
    };
  },
  methods: {
    addToQueue: function({ messages, id }) {
      this.$store.commit("addMessageToQueue", { messages, id });
    },
    changeID: function(id) {
      this.activeID = id;
    },
    getMessages: function() {
      return this.$store.getters.getMessagesByDialogueID(this.activeID);
    },
  },
  computed: {
    messagesQueues: function() {
      return this.$store.getters.getMessagesQueue;
    },
  },
};
</script>

<style>
.socialNetwork {
  display: flex;
}
</style>
