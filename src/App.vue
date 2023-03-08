<template>
    <div class="app">
        <head-menu />
        <router-view />
    </div>

</template>

<script setup>
import HeadMenu from "@/components/head-menu.vue";
</script>

<style>
.app{
    background: #d5fcff;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
}
</style>
