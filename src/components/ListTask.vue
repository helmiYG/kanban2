<template>
    <div>
        <div class="card text-center" v-for="(task, index) in listTasks" v-bind:key="index">
            <div class="card-header">
               <b> {{task.title.toUpperCase()}} </b>
            </div>
            <div class="card-body text-left">
                <p class="card-text">Point: {{task.point}} </p>
                <p class="card-text">Assigned To: {{task.assignedTo}}  </p>
            </div>
            <div class="card-footer text-muted">
                <button class="btn btn-primary btn-sm" v-if="task.assignedTo == 'backlog' " data-toggle="modal" data-target="#modalBl" @click="getTask(task, index, task.assignedTo)">show detail</button>
            </div>
        </div>
        <ModalBacklog v-if="isBl" :detailBl="task" :indexId="id"></ModalBacklog>
    </div>
</template>

<script>
import ModalBacklog from '@/components/ModalBacklog'
export default {
    props: ["listTasks"],
    data () {
        return {
            task: {},
            id: '',
            status: '',
            isBl: false,
            isTd: false,
            isDoing: false,
            isComp: false,
        }
    },
    components: {
        ModalBacklog
    },
    methods: {
        getTask(task, id, status) {
            this.task = task
            this.id = id
            this.status = status
            if (this.status == 'backlog') {
                this.isBl = true,
                this.isTd = false
                this.isDoing = false,
                this.isComp = false
            } else if (this.status == 'todo' ){
                this.isBl = false,
                this.isTd = true
                this.isDoing = false,
                this.isComp = false
            } else if (this.status == 'doing' ){
                this.isBl = false,
                this.isTd = false
                this.isDoing = true,
                this.isComp = false
            } else if (this.status == 'done' ){
                this.isBl = false,
                this.isTd = false
                this.isDoing = false,
                this.isComp = true
            }
        }
    }
};
</script>

<style>
</style>
