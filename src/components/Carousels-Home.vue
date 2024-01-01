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
    <div class="d-flex mt-5 justify-content-around gap-4 p-5">
      <v-card class="mx-auto card" width="100vh" height="300" theme="light" v-for="value in select" :key="value">
        <div class="fs-1 p-5">
          <span class="title-select">{{ value.name }}</span>         
        </div>
        <v-card-actions>
          <VBtn color="success" class="fs-6 p-5 text-center">SHOP NOW</VBtn>       
        </v-card-actions>
      </v-card>      
    </div>
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
      ],
      select: [
        {
          name: "Men",
          image:
            "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_593,c_limit/b390a223-23f1-4d94-b089-832e0e424fe1/men-s-shoes-clothing-accessories.jpg",
        },
        {
          name: "Women",
          image:
            "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_593,c_limit/ca60cd81-4cc5-4372-b3d0-90418e948cab/women-s-shoes-clothing-accessories.png",
        },
        {
          name: "Kids",
          image:
            "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/bce0f912-703c-4f28-8ec7-bc7e49b3eb2a/nike-kids.png",
        },
      ],
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
