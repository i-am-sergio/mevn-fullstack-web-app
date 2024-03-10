<template>
    <h1>TaskList</h1>
    <ul>
        <li v-for="(task, index) in tasks" :key="index">
            {{ task.title }}
        </li>
    </ul>
</template>

<script lang="ts">
import { getTasks } from '@/api/TaskRequests';
import type { Task } from '@/interfaces/Task';
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TaskList',
    data() {
        return {
            tasks : [] as Task[]
        }
    },
    methods: {
        async loadTasks() {
            const res = await getTasks()
            this.tasks = res.data
        }
    },
    mounted() {
        this.loadTasks()
    }

})
</script>