import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import todosModule from './todos'

export default new Vuex.Store({
  modules: {
    todos: todosModule,
  },
  state: {
    user: null,
  },
  mutations: { },
  actions: { },
  getters: { }
})