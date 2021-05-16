import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    messagesQueues: {
      groupID1: [],
      groupID2: [],
    },

  },
  mutations: {
    addMessageToQueue(state, {messages, id}) {
      if(state.messagesQueues[id]) {
        state.messagesQueues[id].push(...messages);
      }
      else {
        state.messagesQueues[id] = [...messages];
      }
    }
  },
  getters: {
    getMessagesByDialogueID: (state) => (id) => {
      console.log(state);
      console.log(id);
      return state.messagesQueues[id] || []
    },
    getMessagesQueue: (state) => {
      return state.messagesQueues;
    }
  }
})