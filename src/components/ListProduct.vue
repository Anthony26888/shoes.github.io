<template>
  <div class="d-flex">
    <div class="card justify-content-center" v-for="value in store.NewReleases" :key="value">
      <v-img :src="value.grid_picture_url" width="100vh" height="100vh" cover></v-img>
      <span class="title">{{ value.name }}</span>
      <span class="price">$ {{ value.retail_price_cents }}</span>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/store/grid";
const store = useAppStore();
</script>

<script>
export default {};
</script>
<style scoped></style>
@/store/grid