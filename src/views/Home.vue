<template>
  <div class="row justify-content-center align-items-center g-2">
    <div class="col-12">
      <carousels />
    </div>    
    <div class="col-12 p-5">      
      <NewReleases/>
    </div>    
  </div>
  
</template>

<script setup>
  import carousels from '@/components/Carousels-Home'  
  import NewReleases from '@/components/New-Release'
</script>
