<template>
  <vContainer>
    <h1>New Releases</h1>
    <v-slide-group show-arrows>
      <v-slide-group-item class="pa-4" show-arrows>
        <div class="card ms-2" v-for="value in store.NewReleases" :key="value">
          <div class="image">
            <v-img :src="value.grid_picture_url" cover></v-img>
          </div>
          <div class="text">
            <span>{{ value.name }}</span>
            <p class="mt-3">${{ value.retail_price_cents }}</p>
          </div>
        </div>
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
.card {
  position: relative;
  background: #fff;
  width: 190px;
  height: 265px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 120ms;
  overflow: hidden;
  box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.1);
}

.card:active {
  transform: scale(0.95);
}


.card:hover::after {
  bottom: 0;
}

.card:active::after {
  content: "Adding !";
  height: 65px;
}

.image {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: auto;
  filter: drop-shadow(3px 3px 5px #18181815);
  transform: translate(-50%, -50%);
  animation: shoes 1s ease infinite alternate;
  transition: all 0.5s ease-in;
}

@keyframes shoes {
  from {
    top: 48%;
  }

  to {
    top: 52%;
  }
}

.card:hover .image {
  /* top: 20%;
  left: 30%; */
  width: 220px;
  height: auto;
  animation: none;
  transform: rotate(15deg) translate(-35%, -25%);
}

.text {
  position: absolute;
  top: 15%;
  left: -250%;
  color: #181818;
  transition: all 0.3s ease-in;
}

.text span {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
}

.text p {
  font-size: 18px;
  font-weight: bold;
}

.card:hover .text {
  top: 5%;
  left: 5%;
}

.fil-shoes2 {
  fill: #a59573;
}
</style>
