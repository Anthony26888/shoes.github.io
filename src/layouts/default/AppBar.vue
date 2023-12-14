<template>
  <v-toolbar
    class="bg-transparent"
    dark
    density="comfortable"
    height="500px"
    rounded="0"
  >
    <v-btn icon @click.stop="drawer = !drawer" class="d-sm-none d-md-block">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    
    <v-toolbar-title class="logo text-center"> fASHION sHOES </v-toolbar-title>

    <v-btn icon>
      <v-icon>mdi-cart-variant</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-export</v-icon>
    </v-btn>
  </v-toolbar>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list :lines="false" density="compact" nav>
      <v-list-item
        v-for="item in items"
        :key="item"
        :value="item"
        color="primary"
      >
        <v-list-item-title class="text-center fs-5 p-3">
          {{ item.text }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<style scoped>
.logo {
  font-family: Inter;
}
</style>
<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { text: "Men", icon: "mdi-folder" },
        { text: "Women", icon: "mdi-account-multiple" },
        { text: "Kids", icon: "mdi-star" },
        { text: "Accessory", icon: "mdi-history" },
      ],
    };
  },
};
</script>
