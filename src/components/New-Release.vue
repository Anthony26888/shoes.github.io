<template>
  <vContainer>
    <h1>New Releases</h1>
    <v-slide-group show-arrows>
      <v-slide-group-item v-for="n in 25" :key="n" v-slot="{ isSelected, toggle }">
        <v-btn class="ma-2" rounded :color="isSelected ? 'primary' : undefined" @click="toggle">
          Options {{ n }}
        </v-btn>
      </v-slide-group-item>
    </v-slide-group>
  </vContainer>
</template>

<script>
export default {
  name: "New-Releases",
  data() {
    return {

    };
  },
};
</script>

<style scoped>

</style>
