import axios from 'axios'

export default {
  namespaced: true,
  state: {
    todos: [],
  },
  mutations: {
    ADD_TODO(state, payload){
      state.todos = [ ...state.todos, payload.todo ]
    },
    SET_TODOS(state, payload){
      state.todos = payload.todos
    },
  },
  actions: {
    fetchTodos({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then( repsonse => {
          commit('SET_TODOS', { todos: repsonse.data })
        })
    }
  },
  getters: {
    completedTodos(state) {
      return state.todos.filter( todo => todo.completed )
    },
    completedTodosCount(state, getters) {
      return getters.completedTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    },
  }
}