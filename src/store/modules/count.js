export default {
  namespaced: true,
  state: {
    count: 0,
    num: 0,
    local: 1,
    todos: [
      {
        id: 1,
        text: "xxxx",
        done: true
      },
      { id: 2, text: "ssss", done: false },
      { id: 3, text: "wtw", done: true }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCounts: (state, getters) => {
      return getters.doneTodos.length;
    },
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id == id);
    }
  },
  mutations: {
    increament(state) {
      state.count++;
    },
    incre1(state) {
      state.num++;
    },
    incre2(state) {
      state.local++;
    },
    increM(state, payload) {
      state.num += payload.mount;
    },
    increC(state, payload) {
      state.count += payload.mount;
    }
  },
  actions: {
    actionA({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit("increament");
          resolve();
        }, 3000);
      });
    },
    actionB({ commit, dispatch }) {
      return dispatch("actionA").then(() => {
        commit("incre1");
      });
    }
  }
};
