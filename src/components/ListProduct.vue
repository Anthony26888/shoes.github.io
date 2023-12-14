<template>
  <v-app id="inspire">
    <v-main>
      <v-breadcrumbs :items="['Trang chủ', 'Sản Phẩm']"></v-breadcrumbs>

      <div class="">
        <v-sheet :elevation="2" class="p-2 bg-teal-accent-4">
          <strong>Máy In Linx CIJ</strong>
        </v-sheet>
        <div class="d-flex justify-content-sm-center justify-content-lg-start flex-wrap p-4">
          <v-card class="m-1" width="300" v-for="value in store.Linx" :key="value">
            <v-img class="align-end" height="250" width="300" :src="value.img" cover></v-img>
            <v-card-subtitle class="pt-4">
              {{ value.model }}
            </v-card-subtitle>

            <v-card-text>
              <h6>{{ value.name }}</h6>
            </v-card-text>

            <v-card-actions>
              <router-link to="/Thong-tin-san-pham" class="mx-auto">
                <v-btn class="text-teal-accent-4" @click="store.GetInfo(value.id)">
                  Xem chi tiết
                </v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </div>

        <v-sheet :elevation="2" class="p-2 bg-teal-accent-4 mt-3">
          <strong>Máy In Hitachi CIJ</strong>
        </v-sheet>
        <div class="d-flex justify-content-sm-center justify-content-lg-start flex-wrap p-4">
          <v-card class="m-1" width="300" v-for="value in store.Hitachi" :key="value">
            <v-img class="align-end" height="250" width="300" :src="value.img" cover></v-img>
            <v-card-subtitle class="pt-4">
              {{ value.model }}
            </v-card-subtitle>

            <v-card-text>
              <h6>{{ value.name }}</h6>
            </v-card-text>

            <v-card-actions>
              <router-link to="/Thong-tin-san-pham" class="mx-auto">
                <v-btn class="text-teal-accent-4" @click="store.GetInfo(value.id)">
                  Xem chi tiết
                </v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import { useAppStore } from "@/store/app";
const store = useAppStore();

</script>

<script>
export default {};
</script>
<style scoped></style>
