<template>
     <div class="col-md-3">
         <div class="card w-100" style="background-color: yellow">
            <div class="card-body">
                <h5 class="card-title">To Do</h5>
               <h1>{{taskTd}}</h1> 
                    <ListTask :listTasks="taskTd"></ListTask>
            </div>
        </div>
    </div>
</template>

<script>
import ListTask from '@/components/ListTask'
export default {
    props: ['taskTd'],
    components: {
        ListTask
    }
}
</script>

<style>

</style>
