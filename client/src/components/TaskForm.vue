<template>

<form @submit.prevent="saveTask()">
    <input type="text" placeholder="Write a title" v-model="task.title" >
    <textarea id="" rows="3" placeholder="Write a description" v-model="task.description" ></textarea>
    <button>Save</button>
</form>

</template>

<script lang="ts">
import {defineComponent} from 'vue'
import type { Task } from '@/interfaces/Task'
import { createTask } from '@/api/TaskRequests'

export default defineComponent({
    name: 'TaskForm',
    data() {
        return {
            task : {

            } as Task
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