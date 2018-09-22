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
                <button 
                    class="btn btn-primary btn-sm" 
                    v-if="task.assignedTo == 'backlog'" 
                    data-toggle="modal" 
                    data-target="#modalBl" 
                    @click="getTask(task, index, task.assignedTo)">
                    show detail
                </button>
                <button 
                    class="btn btn-primary btn-sm" 
                    v-if="task.assignedTo == 'todo'" 
                    data-toggle="modal" 
                    data-target="#modalTodo" 
                    @click="getTask(task, index, task.assignedTo)">
                    show detail
                </button>
                 <button 
                    class="btn btn-primary btn-sm" 
                    v-if="task.assignedTo == 'doing'" 
                    data-toggle="modal" 
                    data-target="#modalDoing" 
                    @click="getTask(task, index, task.assignedTo)">
                    show detail
                </button>
                 <button 
                    class="btn btn-primary btn-sm" 
                    v-if="task.assignedTo == 'done'" 
                    data-toggle="modal" 
                    data-target="#modalDone" 
                    @click="getTask(task, index, task.assignedTo)">
                    show detail
                </button>
            </div>
        </div>
        <ModalBacklog v-if="isBl" :detailBl="task" :indexId="id"></ModalBacklog>
        <ModalTodo v-if="isTd" :detail="task" :indexId="id"></ModalTodo>
        <ModalDoing v-if="isDoing" :detail="task" :indexId="id"></ModalDoing>
        <ModalDone v-if="isDone" :detail="task" :indexId="id"></ModalDone>
    </div>
</template>

<script>
import ModalBacklog from '@/components/ModalBacklog'
import ModalTodo from '@/components/ModalTodo'
import ModalDoing from '@/components/ModalDoing'
import ModalDone from '@/components/ModalDone'
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
            isDone: false,
        }
    },
    components: {
        ModalBacklog,
        ModalTodo,
        ModalDoing,
        ModalDone,
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
                this.isDone = false
            } else if (this.status == 'todo' ){
                this.isBl = false,
                this.isTd = true
                this.isDoing = false,
                this.isDone = false
            } else if (this.status == 'doing' ){
                this.isBl = false,
                this.isTd = false
                this.isDoing = true,
                this.isDone = false
            } else if (this.status == 'done' ){
                this.isBl = false,
                this.isTd = false
                this.isDoing = false,
                this.isDone = true
            }
        }
    }
};
</script>

<style>
</style>
