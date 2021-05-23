export const auth = {
  namespaced: true,
  state: {
    isLogin: false,
    errors: '',
    userData: {
      Terry: {
        login: 'Terry',
        password: 'Terry1234'
      }
    }
    
  },
  getters: {
    getIsLogin: (state) => {
      return state.isLogin;
    },
    getError: (state) => {
      return state.errors;
    }
  },
  mutations: {
    changeIsLogin: function(state) {
      state.isLogin = !state.isLogin
    },
    clearErrors: function(state) {
      state.errors = ''
    }
  },
  actions: {
    isCorrectLogin: function({commit, state}, {login, password}) {
      const user = state.userData[login];
      let isCorrectLogin = login in state.userData;
      let isCorrectPassword = user && user.password == password;
      if (isCorrectLogin && isCorrectPassword) {
        commit('changeIsLogin');
        commit('clearErrors');
        return Promise.resolve(true);
      }
      else if (!isCorrectLogin) {
        state.errors = "Введён неверный логин";
      }
      else if (isCorrectLogin && !isCorrectPassword) {
        state.errors = "Введён неверный пароль";
      }
      return Promise.resolve(false);
    }
  }
}