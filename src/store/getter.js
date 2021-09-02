const getters = {
  doneTodos: state => {
    return state.count.todos.filter(todo => todo.done)
  },
  doneTodosCounts: (state, getters) => {
    return getters.doneTodos.length
  },
  getTodoById: state => id => {
    return state.count.todos.find(todo => todo.id === id)
  }
}

export default getters
