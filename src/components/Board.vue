<template>
    <div class="card board">
    <div class="card-header" :class="setColor('bg-')">
      <h6 class="text-white">{{status}}</h6>
    </div>
    <div class="card-body">
      <ListTask :listTasks="tasks"></ListTask>
    </div>
  </div>
</template>

<script>
import ListTask from '@/components/ListTask'
export default {
  name: "board",
  components: {
        ListTask
},
  props: ["tasks", "status"],
  methods: {
    setColor(input) {
      if (this.status === "backlog") {
        return input + "danger";
      } else if (this.status === "todo") {
        return input + "warning";
      } else if (this.status === "doing") {
        return input + "success";
      } else {
        return input + "primary";
      }
    }
  }
};
</script>

<style>
</style>
