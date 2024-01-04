<template>
  <vContainer>
    <VRow>
      <VCol>
        <div class="container d-flex flex-column justify-content-center algin-item-center p-5 w-100">
          <span class="title-name text-dark">Step Into Style with Our Trendy Shoes!</span><br />
          <span class="title-model text-red">2023</span><br />

          <span class="text-muted">Innovated to withstand your toughest matches, this updated design
            puts flexible, durable materials exactly where they're needed most. </span><br />
          <VBtn color="light" rounded="xl" width="200" size="x-large" class="mt-5">SHOP NOW</VBtn>
        </div>
      </VCol>
      <VCol>
        <v-carousel :continuous="false" :show-arrows="false" hide-delimiter-background delimiter-icon="mdi-square" theme="light" cycle>
          <v-carousel-item v-for="value in item" :key="value">
            <v-img class="title-img" :src="value.image" cover></v-img>
            <div class="title-detail position-absolute top-50 start-0 translate-middle-y">
              <div class="box-detail p-2">
                <span class="text-teal-darken-1 fs-5">{{ value.name }}</span>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </VCol>
    </VRow>
    <v-divider></v-divider>
    <div class="d-flex mt-5 justify-content-around gap-4 pb-4">      
      <v-img src="../assets/Image/Brands/Adidas_Logo.svg.png" width="50" height="50"></v-img>  
      <v-img src="../assets/Image/Brands/Logo_NIKE.svg.png" width="50" height="50"></v-img>  
      <v-img src="../assets/Image/Brands/Jordan_Logo.jpg" width="50" height="50"></v-img>
      <v-img src="../assets/Image/Brands/Vans_Logo.jpg" width="50" height="50"></v-img>
    </div>
    <v-divider></v-divider>
  </vContainer>
</template>
<script>
export default {
  data() {
    return {
      item: [
        {
          name: "Air Jordan 11 Retro 'Space Jam' 2016",
          image:
            "https://image.goat.com/375/attachments/product_template_pictures/images/008/654/900/original/52015_00.png.png",
        },
        {
          name: "Air Jordan 11 Retro 'Legend Blue' 2014",
          image:
            "https://image.goat.com/375/attachments/product_template_pictures/images/010/223/048/original/13607_00.png.png",
        },
        {
          name: "Air Jordan 4 Retro OG 'Bred' 2019",
          image:
            "https://image.goat.com/375/attachments/product_template_pictures/images/020/806/485/original/461782_00.png.png",
        },
      ]
    };
  },
};
</script>
<style scoped>
.title-name {
  color: #000;

  font-family: Inter;
  font-size: 66px;
  font-style: normal;
  font-weight: 700;
  line-height: 62px;
  /* 93.939% */
}

.title-model {
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}

.title-img {
  margin-top: 40px;
  margin-left: 100px;
  width: 600px;
  height: 400px;
  transform: rotate(-45deg);
  flex-shrink: 0;
}

.title-detail {
  width: 373px;
  height: 84px;
  flex-shrink: 0;
  border-radius: 50px;
  text-align: start;
  text-wrap: wrap;
  background: #d9d9d9;
  font-weight: 500;

  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.25);
  z-index: -999;
}

.box-detail {
  width: 200px;
}

.card {
  border-radius: 30px;
  background: #e0e0e0;
  box-shadow: 15px 15px 30px #bebebe,
    -15px -15px 30px #ffffff;
}

.title-select{
  font-family: 'Inter', sans-serif;
  font-family: 'Inter Tight', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 62px;
}
</style>
<script setup>
//
</script>
