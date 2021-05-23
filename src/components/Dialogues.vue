<template>
  <div class="dialogues">
    <Dialogue
      :dialogueID="key"
      v-for="(item, key) in messagesQueues"
      :key="key"
      :isActive="key == activeDialogue"
    />
  </div>
</template>

<script>
import Dialogue from "./Dialogue.vue";
export default {
  name: "Dialogues",
  props: {
    messagesQueues: Object,
    activeDialogue: String,
  },
  components: {
    Dialogue,
  },
  methods: {},
};
</script>

<style>
.dialogues {
  display: flex;
  flex-direction: column;
  border: 1px solid #eaedf3;
  border-right: none;
}
</style>
