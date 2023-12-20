<template>
  <v-data-iterator :items="store.products" :items-per-page="10" :search="search">
    <template v-slot:header>
      <v-toolbar class="px-2 bg-light">
        <VSpacer/>
        <v-text-field v-model="search" clearable density="comfortable" hide-details placeholder="Search"
          prepend-inner-icon="mdi-magnify" style="max-width: 300px;" class="float-right" variant="solo"></v-text-field>
      </v-toolbar>
    </template>

    <template v-slot:default="{ items }">
      <div class="d-flex flex-wrap justify-lg-start justify-sm-center algin-center">
        <v-card class="m-2" width="200" height="350" variant="elevated" v-for="value in items" :key="value">
          <v-img class="align-end text-white img" :src="value.raw.grid_picture_url" cover>

          </v-img>

          <v-card-text class="text-wrap">{{ value.raw.name }}</v-card-text>

          <v-card-actions>
            <b class="fs-5">${{ value.raw.retail_price_cents }}</b>
            <VSpacer />
            <router-link to="/Product">
              <v-btn color="green">
                Detail
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </div>
    </template>

    <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
      <div class="d-flex align-center justify-center pa-4">
        <v-btn :disabled="page === 1" icon="mdi-arrow-left" density="comfortable" variant="tonal" rounded
          @click="prevPage"></v-btn>

        <div class="mx-2 text-caption">
          Page {{ page }} of {{ pageCount }}
        </div>

        <v-btn :disabled="page >= pageCount" icon="mdi-arrow-right" density="comfortable" variant="tonal" rounded
          @click="nextPage"></v-btn>
      </div>
    </template>
  </v-data-iterator>
</template>

<script setup>
import { useAppStore } from "@/store/grid";
const store = useAppStore();
</script>

<script>
export default {};
</script>
<style scoped>
.img:hover {
  scale: 1.2;
}
</style>
