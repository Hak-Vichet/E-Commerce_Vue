<template>
  <header class="max-w-[1024px] mx-auto">
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
    <!-- <HelloWorld msg="You did it!" /> -->

    <NavBar />

    <RouterView />
    
  </header>

  
</template>


<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import NavBar from '@/components/NavBar.vue'

</script>
