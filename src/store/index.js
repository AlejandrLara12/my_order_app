import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    todos: [],
  },
  mutations: {
    ADD_TODO(state, todo){
      state.todos = [ ...state.todos, todo ]
    },
    SET_TODOS(state, todos){
      state.todos = todos
    },
  },
  actions: {
    fetchTodos(context) {
      context.commit('ADD_TODO')
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then( repsonse => {
          console.log('fetch todos', repsonse.data)
          context.commit('SET_TODOS', repsonse.data)
        })
    }
  },
  modules: {
  },
  getters: {
    completedTodos(state){
      return state.todos.filter( todo => todo.completed )
    }
  }
})
