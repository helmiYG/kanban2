<template>
  <div class="container-fluid">
    <div class="row body">
        <BackLog :taskBl="tasks.backlog"></BackLog>
        <ToDo :taskTd="tasks.todo"></ToDo>
        <Doing :taskDoing="tasks.doing"></Doing>
        <Done :taskDone="tasks.done"></Done> 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState, mapActions} from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'
import BackLog from '@/components/Backlog.vue'
import ToDo from '@/components/Todo.vue'
import Doing from '@/components/Doing.vue'
import Done from '@/components/Done.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    BackLog,
    ToDo,
    Doing,
    Done
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

