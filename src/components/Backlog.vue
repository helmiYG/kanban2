<template>
     <div class="col-md-3">
         <div class="card w-100" style="background-color: red">
            <div class="card-body">
                <h5 class="card-title">Back Log</h5>
                    <ListTask :listTasks="taskBl"></ListTask>
            </div>
        </div>
    </div>
</template>

<script>
import ListTask from '@/components/ListTask'
export default {
    props: ['taskBl'],
    components: {
        ListTask
    }
}
</script>

<style>

</style>
