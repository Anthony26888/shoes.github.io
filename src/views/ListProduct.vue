<template>
  <v-breadcrumbs :items="['Trang chủ', 'Sản Phẩm']"></v-breadcrumbs>
  <v-app>
    <VRow justify-sm="center">
      <VCol cols="2" sm="2">
        <FilterProduct />
      </VCol>
      <VCol cols="10" sm="10">
        <ListProduct />
      </VCol>
    </VRow>
  </v-app>
</template>

<script setup>
import ListProduct from "@/components/ListProduct";
import FilterProduct from "@/components/Filter-Product";
</script>
