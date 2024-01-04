<template>
  <v-app>
    <vContainer>
      <v-breadcrumbs :items="['Trang chủ', 'Sản Phẩm']"></v-breadcrumbs>
      <VRow>
        <VCol>
          <Carousels/>
        </VCol>
        <VCol></VCol>
      </VRow>
      
    </vContainer>
  </v-app>
</template>

<script setup>
import Carousels from "@/components/Carousels-Detail.vue";
</script>
