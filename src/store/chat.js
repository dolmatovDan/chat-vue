export const chat = {
    namespaced: true,

    state: {
        messagesQueues: {
          groupID1: [],
          groupID2: [],
        },
        activeID: 'groupID1'
      },
      mutations: {
        addMessageToQueue(state, {messages, id}) {
          if(state.messagesQueues[id]) {
            state.messagesQueues[id].push(...messages);
          }
          else {
            state.messagesQueues[id] = [...messages];
          }
        },
        changeID(state, id) {
          state.activeID = id;
        }
      },
      getters: {
        getMessagesByDialogueID: (state) => (id) => {
          return state.messagesQueues[id] || []
        },
        getMessagesQueue: (state) => {
          return state.messagesQueues;
        },
        getActiveID: (state) => {
          return state.activeID;
        }
      }
}