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
      db.ref(`tasks/${payload.assignedTo}`).push(payload)
    },

    getAllTask (context) {
      db.ref('tasks/').on('value', function(snapshot) {
        let tasks = snapshot.val()
        context.commit('GET_TASKS', tasks) 
      })
    },

    removeTask(contest, payload) {
      db.ref('tasks/'+payload.assignedTo+'/'+payload.id).remove()
    }
  }
})
