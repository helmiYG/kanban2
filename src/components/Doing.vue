<template>
     <div class="col-md-3">
         <div class="card w-100" style="background-color: green">
            <div class="card-body">
                <h5 class="card-title">Doing</h5>
                    <ListTask :listTasks="taskDoing"></ListTask>
            </div>
        </div>
    </div>
</template>

<script>
import ListTask from '@/components/ListTask'
export default {
    props: ['taskDoing'],
    components: {
        ListTask
    }
}
</script>

<style>

</style>
