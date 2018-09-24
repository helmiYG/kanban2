<template>
  <div class="container-fluid">
    <div class="row body">
      <div class="col-lg-3 p-1">
          <Board :tasks="tasks.backlog" :status="'backlog'"/>
        </div>
        <div class="col-lg-3 p-1">
          <Board :tasks="tasks.todo" :status="'todo'"/>
        </div>
        <div class="col-lg-3 p-1">
          <Board :tasks="tasks.doing" :status="'doing'"/>
        </div>
        <div class="col-lg-3 p-1">
          <Board :tasks="tasks.done" :status="'done'"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState, mapActions} from 'vuex'

import Board from '@/components/Board.vue'
export default {
  name: 'home',
  components: {

    Board
  },
  computed: {
    ...mapState( [
      'tasks'
    ])
  },
  methods: {
    ...mapActions ([
      'getAllTask'
    ])
  },
  created () {
    this.getAllTask()
  }
}
</script>

<style>
.body {
  margin-top: 30px
}
</style>

