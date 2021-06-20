import UserService from "../services/UserService";
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
    },
    wantSignUp: false,
  },
  getters: {
    getIsLogin: (state) => {
      
      return state.isLogin;
    },
    getError: (state) => {
      return state.errors;
    },
    getUserData: (state) => {
      return state.userData;
    },
    getWantSignUp: (state) => {
        return state.wantSignUp;
    }
  },
  mutations: {
    changeIsLogin: function(state, data) {
      state.isLogin = data;
    },
    clearErrors: function(state) {
      state.errors = ''
    },
    changeWantSignUp: function(state, data) {
        state.wantSignUp = data;
    },
    changeErrors: function(state, err) {
        state.errors = err;
    }
  },
  actions: {
    async isCorrectLogin({commit, state}, {login, password}) {
      const isLogin = await UserService.isCorrectLogin({login, password});

      if (isLogin['isLogin']) {
        commit('changeIsLogin', true);
        commit('clearErrors');
        UserService.addToLocalStorage();
        return Promise.resolve(true);
      }
      else {
        state.errors = isLogin["message"];
        console.log(isLogin["message"]);
      }
      return Promise.resolve(false);
    },
    async sendUserData({commit, state}, {login, password}) {
        const response = await UserService.sendUserData({login, password});
        state.errors = response["message"];
    
        if (response["isLogin"]) {
            commit("changeWantSignUp", false);
            commit("clearErrors");
            commit("changeIsLogin", true);
        }
        return Promise.resolve(response["isLogin"]);
    }
  }
}