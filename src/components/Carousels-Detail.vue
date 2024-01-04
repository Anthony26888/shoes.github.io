<template lang="">
  <v-carousel cycle height="500" hide-delimiter-background show-arrows="hover">
    <v-carousel-item v-for="value in store[1]" :key="value">
      <v-img :src="value.main_picture_url"></v-img>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  components: "InfoProduct",
  setup() {
    const store = useAppStore();
    const { Info } = storeToRefs(store);
    return { Info };
  },
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>
<style scoped>

</style>

