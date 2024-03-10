<script setup lang="ts">
import Navbar from './components/Navbar.vue';

</script>

<template>
    <Navbar />
    <div class="container p-5">
        <router-view/>
    </div>
</template>

<style scoped>
    h1 {
        color: red;
    }
</style>
