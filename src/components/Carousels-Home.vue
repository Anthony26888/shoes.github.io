<template>
  <vContainer>
    <VRow>
      <VCol>
        <div class="container d-flex flex-column justify-content-center algin-item-center p-5 w-75">
          <span class="title-name text-light">Step Into Style with Our Trendy Shoes!</span><br />
          <span class="title-model text-red">2023</span><br />

          <span class="text-muted">Innovated to withstand your toughest matches, this updated design
            puts flexible, durable materials exactly where they're needed most. </span><br />
          <VBtn color="light" rounded="xl" width="200" size="x-large" class="mt-5">SHOP NOW</VBtn>
        </div>
      </VCol>
      <VCol>
        <v-carousel :continuous="false" :show-arrows="false" hide-delimiter-background delimiter-icon="mdi-square">
          <v-carousel-item v-for="value in item" :key="value">
            <v-img class="title-img"
              :src="value.image"
              cover></v-img>
            <div class="title-detail position-absolute top-50 start-0 translate-middle-y">
              <div class="box-detail p-2">
                <span class="text-teal-darken-1 fs-5">{{ value.name }}</span>
              </div>
            </div>
          </v-carousel-item>         
        </v-carousel>
      </VCol>
    </VRow>
    <div class="d-flex mt-5 justify-content-center gap-3">
      <v-card v-for="value in select" :key="value" width="300" height="300"> 
        <v-img :src="value.image" cover></v-img>
        <span class="fs-4 text-dark">{{ value.name }}</span>
      </v-card>
    </div>
  </vContainer>
</template>
<script>
export default {
  data() {
    return {
      item:[
        {name:"NikeCourt Zoom Vapor Cage 4 Rafa", image:"https://s3-alpha-sig.figma.com/img/694c/c3e7/2d0a457d72c79e7f50c2637c81a3ef12?Expires=1703462400&Signature=EpI3eqwlZseCbcaXfsp2sETRo1jNF2g9y-Z0SITNz8gMnJC~dVmPpMPvkMr6OBpsvkxhkgsZ5sBc~Fdzm3TlpsoRfKLaQdmU5bL~4WC3b2HDmbANvTSBq-X46uNmqw~EVEI9gaHJBS-AYzYTLxaujLosu10mOJ1RqzABO7dj~bzMJ-dUozPFNJmerKC3fIn1p02NyM6TRXI9B9b1bv~zKWArWDKbkL4G0UqBUU5urmbZ6kd6ws4b0WOtrZN15BegMkoit~lVKkWStLl7-Rb36pkOTEuKvcUTpqaJPuvumih8ZtaSSOqkojjCkrm2UhUNX1ofgWfKQvNFiKcvcKRpaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
        {name:"NikeCourt Zoom rafa-hard-court", image:"https://s3-alpha-sig.figma.com/img/b8a5/2fe4/a4257d2dd14b71eeb3137180a77d8ed0?Expires=1703462400&Signature=bTh7RJmAUsAUWqFZGAXAobeNfrgQCkpaq5RU4FzvJC5Yo20jG3ef5N9QmkfQsuySrAFMLQ5yJAhdp4251K86K7NwyPMClJK2LzOs7AVX~-Y1swCs6i9hZm~6SiR0kWI~Z2JTvGt4jXM0B2uIRz15fpuRc8i7T5aOlw2yS5cJlrEVTqnOk3-fer7S1INkNCKQCpfDD7w3NIvxQSYijpovgHWi8xwrZlp-hiDWi9ENzb7uo98JQoSvPRKL9B8XcE83ZVYcbHtzuV3n1zt32B81V6NdlRTXYOWG3Yo6ebIqQtfKd4jIamiAuYcz39pXg-Sg0pD59s0OcndbSle5ZXsijw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
        {name:"NikeCourt Zoom pro-hard-court", image:"https://s3-alpha-sig.figma.com/img/6adf/0a4c/2db2495b5313988309e2cb80e94032b8?Expires=1703462400&Signature=hlpNoKCONdS4eaxFY4LbOh5e07fkn~WQCqa-xSrSAILQqKMYFreYZs21nE8AVnrN-D0jpjPrAGMmnF56EArrxyALCLhMCDXt8gweUl-dVjrBiiEZgRmRpIE8sRv9KcLrTAK1gCT6eg8XdPXNQhYJQaWPXIrqQhHb8kEi5nMpa7353e8DYn98v-y8PX0Y8uwQLaSNezXABzPoNFX6XPUf5b63mcvArDhn3Lm5JfzeaPdwFVVFY~8Ls4AuNPzHoS3i5t9GwQwh25Mtz4aO8mfPtgxbd0oCT5-R1DAO2xAT-kOm74YDFNOzn-ZmNK3oU~H8NLn2qlWWybeIJMVFMHLZDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
      ],
      select:[
        {name:"Men", image:"https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_593,c_limit/b390a223-23f1-4d94-b089-832e0e424fe1/men-s-shoes-clothing-accessories.jpg"},
        {name:"Women", image:"https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_593,c_limit/ca60cd81-4cc5-4372-b3d0-90418e948cab/women-s-shoes-clothing-accessories.png"},
        {name:"Kids", image:"https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/bce0f912-703c-4f28-8ec7-bc7e49b3eb2a/nike-kids.png"},
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
  margin-top: 50px;
  width: 600px;
  height: 400px;
  transform: rotate(-15deg);
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
</style>
<script setup>
//
</script>
