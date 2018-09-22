<template>
    <div>
        <v-layout row wrap>
            <v-flex v-for="(task, index) in tasks" :key="index" xs12 style="border: 1px solid black">
                <v-card color="blue-grey darken-2">
                    <v-card-title class="leftText" primary-title>
                    <div class="headline">{{task.title}}</div>
                    <hr>
                    <div>
                        <p>Point: {{task.point}}</p>
                        <p>Assigned To: {{task.assignedTo}}</p>
                    </div>
                    </v-card-title>
                    <v-card-actions>
                        <div class="leftText">
                            <v-btn class="blue" v-if="task.status === 'Backlog'" data-toggle="modal" data-target="#modalDetailBacklog" data-placement="top" title="first time you must be two click" @click="getTask(task, index, task.status)">Show Detail</v-btn>
                            <v-btn class="blue" v-if="task.status === 'Todo'" data-toggle="modal" data-target="#modalDetailTodo" data-placement="top" title="first time you must be two click" @click="getTask(task, index, task.status)">Show Detail</v-btn>
                            <v-btn class="blue" v-if="task.status === 'Doing'" data-toggle="modal" data-target="#modalDetailDoing" data-placement="top" title="first time you must be two click" @click="getTask(task, index, task.status)">Show Detail</v-btn>
                            <v-btn class="blue" v-if="task.status === 'Done'" data-toggle="modal" data-target="#modalDetailDone" data-placement="top" title="first time you must be two click" @click="getTask(task, index, task.status)">Show Detail</v-btn>
                        </div>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <ModalShowBacklog v-if="isBacklog" :detailBacklog="task" :indexId="id"/>
            <ModalShowTodo v-else-if="isTodo" :detailShowTodo="task" :indexId="id"/>
            <ModalShowDoing v-else-if="isDoing" :detailShowDoing="task" :indexId="id"/>
            <ModalShowDone v-else-if="isDone" :detailShowDone="task" :indexId="id"/>
        </v-layout>
    </div>
</template>

<script>
import ModalShowBacklog from '@/components/ModalShowBacklog.vue'
import ModalShowTodo from '@/components/ModalShowTodo.vue'
import ModalShowDoing from '@/components/ModalShowDoing.vue'
import ModalShowDone from '@/components/ModalShowDone.vue'
export default {
    data() {
       return {
           task: [],
           id: '',
           status: '',
           isBacklog: false,
           isTodo: false,
           isDoing: false,
           isDone: false
       }
    },
    methods: {
        getTask(task, id, status) {
            this.task = task
            this.id = id
            this.status = status
            if(this.status === 'Todo') {
                this.isBacklog = false
                this.isDoing = false
                this.isDone = false
                this.isTodo = true
            } else if(this.status === 'Backlog') {
                this.isTodo = false
                this.isDoing = false
                this.isDone = false
                this.isBacklog = true
            } else if (this.status === 'Doing') {
                this.isTodo = false
                this.isBacklog = false
                this.isDone = false
                this.isDoing = true
            } else if(this.status === 'Done') {
                this.isTodo = false
                this.isBacklog = false
                this.isDoing = false
                this.isDone = true
            }
        }
    },
    components: {
        ModalShowBacklog,
        ModalShowTodo,
        ModalShowDoing,
        ModalShowDone
    },
    props: ['tasks'],
    mounted() {
        this.waiting = false
    }
}
</script>

<style>
    .leftText {
        text-align: left
    }
</style>