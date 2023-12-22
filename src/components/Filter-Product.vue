<template lang="">
  <v-list :items="items"></v-list>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Item #1",
          value: 1,
        },
        {
          title: "Item #2",
          value: 2,
        },
        {
          title: "Item #3",
          value: 3,
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
