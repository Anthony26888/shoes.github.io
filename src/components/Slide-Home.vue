<template>
  <vContainer>
    <h1>New Releases</h1>
    <v-slide-group show-arrows>
      <v-slide-group-item class="pa-4" show-arrows>
        <v-card class="m-2" width="200" height="350" variant="elevated" v-for="value in store.NewReleases" :key="value">
          <v-img class="align-end text-white img" :src="value.grid_picture_url" cover>

          </v-img>

          <v-card-text class="text-wrap">{{ value.name }}</v-card-text>

          <v-card-actions>
            <b class="fs-5">${{ value.retail_price_cents }}</b>
            <VSpacer />
            <router-link to="/Product">
              <v-btn color="green">
                Detail
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </vContainer>
</template>
<script setup>
import { useAppStore } from "@/store/grid";
const store = useAppStore();
</script>
<script>
export default {
  name: "New-Releases",
  data() {
    return {};
  },
};
</script>

<style scoped>
.img:hover {
  scale: 1.2;
}
</style>
