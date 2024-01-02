<template lang="">
  <v-navigation-drawer width="300" height="100vh">
    <v-list>      
      <v-list :items="items" :value="item"></v-list>
      <v-divider></v-divider>
      <v-list-subheader>Colour</v-list-subheader>
      <v-list-item>
        <v-row>
          <v-col cols="3">
            <VBtn stacked >
              <div class="bg-black m-2 p-3 circle"></div>
              <p>Black</p>
            </VBtn>
            <VBtn stacked >
              <div class="bg-white m-2 p-3 circle"></div>
              <p>White</p>
            </VBtn>
            <VBtn stacked>
              <div class="bg-blue m-2 p-3 circle"></div>
              <p>Blue</p>
            </VBtn>
          </v-col>
          <v-col cols="3">
            <VBtn stacked >
              <div class="bg-cream m-2 p-3 circle"></div>
              <p>Cream</p>
            </VBtn>
            <VBtn stacked >
              <div class="bg-multi m-2 p-3 circle"></div>
              <p>Multi</p>
            </VBtn>
            <VBtn stacked >
              <div class="bg-orange m-2 p-3 circle"></div>
              <p>Orange</p>
            </VBtn>
          </v-col>
          <v-col cols="3">
            <VBtn stacked >
              <div class="bg-red m-2 p-3 circle"></div>
              <p>Red</p>
            </VBtn>
            <VBtn stacked >
              <div class="bg-tan m-2 p-3 circle"></div>
              <p>Tan</p>
            </VBtn>
            <VBtn stacked >
              <div class="bg-grey m-2 p-3 circle"></div>
              <p>Grey</p>
            </VBtn>
          </v-col>
        </v-row>
      </v-list-item>
      
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { type: "subheader", title: "Brands" },
        {
          title: "Nike",
          value: "Nike",
        },
        {
          title: "Air Jordan",
          value: "Jordan",
        },
        {
          title: "Adidas",
          value: "adidas",
        },
        {
          title: "Vans",
          value: "Vans",
        },
        { type: "divider" },
        { type: "subheader", title: "Category" },
        {
          title: "Basketball",
          value: 3,
        },
        {
          title: "Lifestyle",
          value: 4,
        },
        { type: "divider" },
        { type: "subheader", title: "Box Condition" },
        {
          title: "Good Condition",
          value: "Good Condition",
        },
        {
          title: "No Original Box",
          value: "No Original Box",
        },
        { type: "divider" },
        { type: "subheader", title: "Shoe Condition" },
        {
          title: "New no defects",
          value: "New no defects",
        },
        {
          title: "Used",
          value: "Used",
        },
        { type: "divider" },
        { type: "subheader", title: "Gender" },
        {
          title: "Men",
          value: 9,
        },
        {
          title: "Women",
          value: 10,
        },
      ]
    };
  },
};
</script>
<style scoped>
p {
  font-size: 10px;
}
.circle {
  border-radius: 50%;
}
.bg-white {
  border: 1px solid black;
}
.bg-cream {
  background-color: #fffdd0;
}

.bg-multi {
  background: radial-gradient(#ffffff 20%, transparent 20%),
    radial-gradient(#ffffff 20%, transparent 20%), #000;
}

.bg-tan {
  background-color: #d2b48c;
}
</style>
