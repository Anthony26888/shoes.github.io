<template>
  <vContainer>
    <v-breadcrumbs :items="['Trang chủ', 'Sản Phẩm']"></v-breadcrumbs>
    <VRow>
      <VCol cols="2">
        <FilterProduct/>
      </VCol>
      <VCol cols="10">
        <ListProduct/>
      </VCol>
    </VRow>
  </vContainer>
  
</template>

<script setup>
import ListProduct from "@/components/ListProduct";
import FilterProduct from "@/components/Filter-Product";
</script>
