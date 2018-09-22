<template>
  <div class="container-fluid">
    <div class="row">
        <BackLog :taskBl="tasks.backlog"></BackLog>
        <ToDo :taskTd="tasks.todo"></ToDo>
        <!-- <Progress :taskPR="AllTasks"></Progress> -->
        <!-- <Completed :taskCM="AllTasks"></Completed>  -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState, mapActions} from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'
import BackLog from '@/components/Backlog.vue'
import ToDo from '@/components/Todo.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    BackLog,
    ToDo
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
  },
  mounted() {
    this.getAllTask()
  },
}
</script>
