import Vue from 'vue'
import {chat} from './chat'
import {auth} from './auth'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  modules: {
    chat,
    auth
  }
})