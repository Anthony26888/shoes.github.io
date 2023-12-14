<template>
  <div class="row justify-content-center align-items-center g-2">
    <div class="col-12">
      <carousels />
    </div>
    <div class="col-12 p-3">
      <Home/>
    </div>    
  </div>
  
</template>

<script setup>
  import carousels from '@/components/Carousels-Home'
  import Home from '@/components/TabSelect-Home'
</script>
