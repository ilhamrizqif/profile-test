<script setup>
import { RouterLink, RouterView } from "vue-router";
import SidebarComponent from "../components/SidebarComponent.vue";
import NavbarComponent from "../components/NavbarComponent.vue";
import AddCourse from "../views/Course/AddCourse.vue";
import Breadcrumb from "../components/Breadcrumbs.vue";
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex font-primary">
    <div><SidebarComponent /></div>
    <div class="w-full">
      <NavbarComponent />
      <Breadcrumb />
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
</style>
