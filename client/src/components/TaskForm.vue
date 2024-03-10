<template>

<div class="col-md-4 offset-md-4">
    <form @submit.prevent="saveTask()" class="card card-body">
        <h1 class="text-center h3 mb-3">Create Task</h1>
        <input class="form-control mb-3" type="text" placeholder="Write a title" v-model="task.title" autofocus >
        <textarea class="form-control mb-3" id="" rows="3" placeholder="Write a description" v-model="task.description" ></textarea>
        <button class="btn btn-primary" :disabled="!task.title || !task.description" >Save</button>
    </form>

</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import type { Task } from '@/interfaces/Task'
import { createTask } from '@/api/TaskRequests'

export default defineComponent({
    name: 'TaskForm',
    data() {
        return {
            task : { } as Task
        }
    },
    methods: {
        async saveTask() {
            const res = await createTask(this.task)
            console.log(res)
            this.$router.push('/tasks')
        }
    }
})

</script>