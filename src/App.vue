<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import vue from '@vitejs/plugin-vue'

</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/detail">Details</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
