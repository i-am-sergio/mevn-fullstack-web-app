<template>
<div class="col-md-4 offset-md-4">
    <form @submit.prevent="handleUpdate()" class="card card-body">
        <h1 class="text-center h3 mb-3">Task Detail</h1>
        <input class="form-control mb-3" type="text" v-model="currentTask.title">
        <textarea class="form-control mb-3" rows="3" v-model="currentTask.description"></textarea>
        <button class="btn btn-primary" >Update</button>
    </form>
    <div class="text-center">
        <button @click="handleDelete()" class="btn btn-danger text-center" >Delete</button>
    </div>
</div>
</template>

<script lang="ts">
import { deleteTask, getTask, updateTask } from '@/api/TaskRequests'
import type { Task } from '@/interfaces/Task'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TaskDetail',
    data() {
        return {
            currentTask: {} as Task
        }
    },
    methods: {
        async loadTask(id: string) {
            const res = await getTask(id)
            this.currentTask = res.data
            console.log(this.currentTask)
        },
        async handleUpdate(){
            const res = await updateTask(this.currentTask)
            this.$router.push('/tasks')
        },
        async handleDelete(){
            if(typeof this.$route.params.id === 'string'){
                const res = await deleteTask(this.$route.params.id)
                console.log(res)
                this.$router.push('/tasks')
            }
        }
    },
    mounted() {
        if(typeof this.$route.params.id === 'string'){
            this.loadTask(this.$route.params.id)
        }
        console.log(this.$route.params.id)
    }
})

</script>