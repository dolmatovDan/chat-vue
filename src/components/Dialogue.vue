<template>
  <div
    v-on:click="selectDialogue"
    class="dialogue"
    :class="{ 'dialogue--active': isActive, 'dialogue--disabled': !isActive }"
  >
    <div class="dialogue__icons">
      <div class="dialogue__icon"></div>
      <div class="dialogue__icon"></div>
    </div>
    <div class="dialogues__text">
      <p class="dialogue__name">Name</p>
      <p class="dialogue__messages">Lorem ipsum dolor sit amet</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialogue",
  props: {
    dialogueID: String,
    isActive: Boolean,
  },
  data: function() {
    return {};
  },
  components: {},
  methods: {
    selectDialogue: function() {
      this.$store.commit("chat/changeID", this.dialogueID);
    },
  },
  computed: {},
};
</script>

<style>
.dialogue {
  width: 300px;
  height: 100px;
  background-color: #fff;
  border-bottom: 1px solid #eaedf3;
  display: flex;

  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.dialogue--active {
  border-left: 6px solid #5965db;
}

.dialogue--disabled {
  border-left: 6px solid transparent;
}
.dialogue__icon {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: green;
}

.dialogue__name {
  font-size: 18px;
  margin: 0;
}

.dialogue__messages {
  margin: 0;
}
</style>
