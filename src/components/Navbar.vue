<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" style="color: white; font-size: 40px;">KANBAN</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                </ul>
                <button class="btn btn-light my-2 my-sm-0" type="button" data-toggle="modal" data-target="#modalAdd" >New Task</button>
            </div>
        </nav>
        <ModalAdd></ModalAdd>
    </div>
</template>

<script>
import ModalAdd from '@/components/ModalAdd.vue'
export default {
    components: {
        ModalAdd
    }
}
</script>

<style>

</style>
