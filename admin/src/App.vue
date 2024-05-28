<template>
  <div>
    <SideBar />
    <div class="lg:pl-72">
      <TopBar />
      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import SideBar from './components/SideBar.vue'
import TopBar from './components/TopBar.vue'
</script>