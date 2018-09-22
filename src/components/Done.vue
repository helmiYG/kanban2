<template>
     <div class="col-md-3">
         <div class="card w-100" style="background-color: pink">
            <div class="card-body">
                <h5 class="card-title">Done</h5>
                    <ListTask :listTasks="taskDone"></ListTask>
            </div>
        </div>
    </div>
</template>

<script>
import ListTask from '@/components/ListTask'
export default {
    props: ['taskDone'],
    components: {
        ListTask
    }
}
</script>

<style>

</style>
