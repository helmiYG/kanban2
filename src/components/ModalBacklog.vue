<template>
    <div class="modal fade" id="modalBl" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Detail {{detailBl.title}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" style="text-align: left !important">
                    <table class="table">
                            <tr>
                                <th scope="row">Title</th>
                                <td> {{detailBl.title}} </td>
                            </tr>
                            <tr>
                                <th scope="row">Point</th>
                                <td> {{detailBl.point}} </td>
                            </tr>
                            <tr>
                                <th scope="row">Description</th>
                                <td> {{detailBl.description}} </td>
                            </tr>
                        </table>
                        <hr>
                    <center> 
                        <!-- <button type="button" class="btn btn-success" data-dismiss="modal"><i class="fas fa-arrow-circle-left"></i></button>  -->
                        <button type="button" class="btn btn-danger" data-dismiss="modal" @click="remove"><i class="fas fa-trash-alt"></i></button>
                        <button type="button" class="btn btn-success" data-dismiss="modal" @click="next"><i class="fas fa-arrow-circle-right"></i></button>
                    </center>
                </div> 
                <div class="modal-footer text-center">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import db from '../firebase'
export default {
    props: ['detailBl', 'indexId'],
    methods: {
        ...mapActions (
            ['createTask', 'removeTask']
        ),
        remove () {
            let obj = {
                assignedTo: this.detailBl.assignedTo,
                id: this.indexId
            }
            this.removeTask(obj)
        },

        next () {
            let obj = {
                title: this.detailBl.title,
                point: this.detailBl.point,
                description: this.detailBl.description,
                assignedTo: 'todo'
            }
            this.createTask(obj)
            db.ref(`tasks/${this.detailBl.assignedTo}/${this.indexId}`).remove()
            
        }
    }

}
</script>

<style>

</style>
