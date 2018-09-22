<template>
    <div class="modal fade" id="modalDone" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Detail {{detail.title}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" style="text-align: left !important">
                    <table class="table">
                            <tr>
                                <th scope="row">Title</th>
                                <td> {{detail.title}} </td>
                            </tr>
                            <tr>
                                <th scope="row">Point</th>
                                <td> {{detail.point}} </td>
                            </tr>
                            <tr>
                                <th scope="row">Description</th>
                                <td> {{detail.description}} </td>
                            </tr>
                        </table>
                        <hr>
                    <center> 
                        <button type="button" class="btn btn-success" data-dismiss="modal" @click="back"><i class="fas fa-arrow-circle-left"></i></button> 
                        <button type="button" class="btn btn-danger" data-dismiss="modal" @click="remove"><i class="fas fa-trash-alt"></i></button>
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
    props: ['detail', 'indexId'],
    methods: {
         ...mapActions (
            ['createTask', 'removeTask']
        ),
        remove () {
             let obj = {
                assignedTo: this.detail.assignedTo,
                id: this.indexId
            }

            this.removeTask(obj)
        },

        back () {
            let obj = {
                title: this.detail.title,
                point: this.detail.point,
                description: this.detail.description,
                assignedTo: 'doing'
            }
            this.createTask(obj)
            db.ref(`tasks/${this.detail.assignedTo}/${this.indexId}`).remove()
        }
    }

}
</script>

<style>

</style>
