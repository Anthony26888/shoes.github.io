<template>
  <v-app>
    <default-bar />
    
    <default-view />
    <Footer/>
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import Footer from './Footer.vue'
  import DefaultView from './View.vue'
</script>
