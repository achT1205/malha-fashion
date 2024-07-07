<template>
  <h1>{{ route.params.name }}</h1>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
</script>