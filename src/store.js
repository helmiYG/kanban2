import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    GET_TASKS( state, payload) {
      state.tasks = payload
    }
  },
  actions: {
    createTask (context, payload) {
      console.log(payload);
      
      db.ref(`tasks/${payload.assignedTo}`).push(payload)
    },

    getAllTask (context) {
      db.ref('tasks/').once('value')
      .then((snapshot) => {
        let tasks = snapshot.val()
        context.commit('GET_TASKS', tasks)
      })
    }
  }
})
