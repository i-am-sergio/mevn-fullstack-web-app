<template>
    <ul class="list-group">
        <li class="list-group-item list-group-item-action"
            style="cursor: pointer;" 
            v-for="(task, index) in tasks" :key="index"
            @click="$router.push(`/tasks/${task._id}`)">
            {{ index + 1 }} {{ !task.done ? '✅' : '❌' }}
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
            tasks: [] as Task[]
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