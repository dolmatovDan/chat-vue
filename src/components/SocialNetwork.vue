<template>
  <div class="socialNetwork">
    <Dialogues
      :activeDialogue="activeID"
      :messagesQueues="messagesQueues"
      v-on:getID="changeID"
    />
    <MessageContainer
      :messagesQueues="getDialoguesMessages"
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
      messagesQueues: {
        groupID1: [],
        groupID2: [],
      },
      activeID: "groupID1",
    };
  },
  methods: {
    addToQueue: function(data) {
      this.messagesQueues[this.activeID].push(...data);
    },
    changeID: function(id) {
      console.log(id);
      this.activeID = id;
    },
  },
  computed: {
    getDialoguesMessages: function() {
      return this.messagesQueues[this.activeID];
    },
  },
};
</script>

<style>
.socialNetwork {
  display: flex;
}
</style>
