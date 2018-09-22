<template>
    <div class="modal fade" id="modalAdd" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Add Task</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" style="text-align: left !important">
            <form>
                    <div class="form-group">
                        <label for="inputTitle" style="text-align: left;">Title</label>
                        <input type="text" class="form-control" id="title"  placeholder="Title" v-model="title">
                    </div>
                    <div class="form-group">
                        <label for="inputPassword">Description</label>
                        <input type="text" class="form-control" id="password" placeholder="Desecription" v-model="description">
                    </div>
                    <div class="form-group">
                        <label for="inputPoint">Point</label>
                        <input type="number" class="form-control" id="point" placeholder="Point" v-model="point">
                    </div>
                    <div class="form-group">
                        <label for="inputStep">Assigned To</label>
                        <input type="text" class="form-control" id="inputStep" placeholder="Assigned To" v-model="assignedTo">
                    </div>
            </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addTask">Submit</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data () {
        return {
            title: '',
            description: '',
            point: '',
            assignedTo: ''
        }
    },
    methods: {
        ...mapActions ([
            'createTask', 'getAllTask'
        ]),

        addTask () {
            let obj = {
                title: this.title,
                description: this.description,
                point: this.point,
                assignedTo: this.assignedTo
            }

            this.createTask(obj)
            this.getAllTask()
        }
    }
}
</script>

<style>

</style>
