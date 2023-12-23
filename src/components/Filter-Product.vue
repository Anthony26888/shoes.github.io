<template lang="">
  <v-list :items="items"></v-list>
  <v-list>
    <v-divider></v-divider>
    <v-list-subheader>Colour</v-list-subheader>
    <v-list-item>
      <v-row>
        <v-col></v-col>
        <v-col></v-col>
        <v-col></v-col>
      </v-row>
    </v-list-item>
  </v-list>
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
          value: 5,
        },
        {
          title: "No Original Box",
          value: 6,
        },
        { type: "divider" },
        { type: "subheader", title: "Shoe Condition" },
        {
          title: "New no defects",
          value: 7,
        },
        {
          title: "Used",
          value: 8,
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
      ],
      colour:[
        "Black","White", "Blue", "Cream", "Multi-Color", "Orange", "Red", "Tan", "Grey"
      ]
    };
  },
};
</script>
<style lang=""></style>
