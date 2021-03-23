<template>
  <div class="message">
    <div class="message-holder">
      <div class="message-container">
        <div class="message__sender">
          <div
            class="message__icon"
            :style="{
              'background-image': avatarLink,
            }"
          ></div>
          <div class="message__name">{{ name }}</div>
        </div>
        <span class="message__time">{{ msgTime }}</span>
      </div>
      <div class="message--friend message">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  components: {},
  props: {
    text: String,
    avatar: String,
    name: String,
    time: String,
  },
  methods: {},
  computed: {
    msgTime: function() {
      const date = new Date(this.time);
      let hours = date.getHours();
      const min = date.getMinutes();
      if (hours >= 12) {
        hours -= 12;
        return hours + ":" + min + " " + "P.M.";
      }
      return hours + ":" + min + " " + "A.M.";
    },
    avatarLink: function() {
      return "url(" + require("@/assets/" + this.avatar) + ")";
    },
  },
};
</script>

<style>
.message {
  display: inline-block;
  padding: 11px 7px 9px 14px;
  border-radius: 5px;
  background-color: #5965db;
  max-width: 420px;
  word-break: break-word;
  margin-bottom: 25px;
}

.message-holder {
  display: flex;
  flex-direction: column;
}

.message-container {
  max-width: 420px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
}

.message__sender {
  max-width: calc(95px + 14px + 22px);
  height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.message__name {
  color: #000;
}

.message__icon {
  width: 22px;
  height: 22px;
  background-color: red;
  border-radius: 50%;
  margin-right: 10px;
}

.message__time {
  color: #8d97a5;
  font-size: 14px;
}

.message--my {
  background-color: #f4f4f4;
  align-self: flex-end;
}

.message--friend {
  color: #fff;
  background-color: #5965db;
  align-self: flex-start;
}

.message--hidden {
  display: none;
}
</style>
