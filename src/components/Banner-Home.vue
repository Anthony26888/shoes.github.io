<template lang="">
  <vContainer>
    <VRow>
      <VCol cols="8">
        <v-img :src="item[0]" height="550" cover></v-img>
      </VCol>
      <VCol cols="4">
        <v-img :src="item[1]" height="550" cover></v-img>
      </VCol>
    </VRow>
  </vContainer>
</template>
<script>
export default {
  data() {
    return {
      item: [
        "https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt5c5b8afd0b5fbe2f/6568a7f0f41504d5da127237/SMS-5offpurchase_SecondaryA_EN_(1).png?format=jpg&auto=webp&height=438",
        "https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltdf3968a815902d6d/657da77a13cde969b61fd8f1/KAWS_x_Sky_High_Nike_AF1_(Release_Day_Assets)SecondaryB.jpg?quality=80&auto=webp&format=pjpg&dpr=1&width=425&height=425",
      ],
    };
  },
};
</script>
<style lang=""></style>
