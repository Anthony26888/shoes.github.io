<template>
  <div class="row justify-content-center align-items-center g-2">
    <div class="col-12">
      <carousels />
    </div>    
    <div class="col-12 p-5">      
      <Slide/>
      <Banner/>
    </div>    
  </div>
  
</template>

<script setup>
  import carousels from '@/components/Carousels-Home'  
  import Slide from '@/components/Slide-Home'
  import Banner from '@/components/Banner-Home'
</script>
