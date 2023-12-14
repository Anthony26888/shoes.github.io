<template lang="">
  <v-app id="inspire">
    <v-main>
      <div class="container">
        <v-breadcrumbs
          :items="['Trang chủ', 'Sản Phẩm', `${Info.name}`]"
        ></v-breadcrumbs>
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-sm-6 col-xs-12">
            <img :src="Info.img" alt="" srcset="" class="" cover />
          </div>
          <div class="col-sm-6 col-xs-12">
            <v-card class="w-100 mt-5 card mx-auto container p-5">
              <v-card-item class="mx-auto" elevation="16">
                <h1 class="text-teal-accent-4">{{ Info.name }}</h1>

                <v-card-subtitle
                  ><span>{{ Info.model }}</span></v-card-subtitle
                >
              </v-card-item>

              <v-card-text>
                <span>{{ Info.description }}</span>
                <VSpacer />
                <VBtn class="bg-teal-accent-4 mt-5">Liên hệ ngay</VBtn>
                <p class="mt-3">
                  <v-icon
                    size="large"
                    color="green-darken-2"
                    icon="mdi-phone"
                  ></v-icon>
                  0918504086 (Mr Hải)
                </p>
              </v-card-text>
            </v-card>
          </div>
        </div>

        <div class="mt-3">
          <v-card>
            <v-tabs
              v-model="tab"
              class="text-teal-accent-4"
              align-tabs="center"
            >
              <v-tab value="one">Tính năng nổi bật</v-tab>
              <v-tab value="two">Đặc điểm kĩ thuật</v-tab>
            </v-tabs>

            <v-card-text>
              <v-window v-model="tab">
                <v-window-item value="one">
                  <v-list :items="Info.tech">
                    <template v-slot:prepend>
                      <v-icon
                        size="large"
                        color="green-darken-2"
                        icon="mdi-circle-small"
                      ></v-icon>
                    </template>
                  </v-list>
                </v-window-item>

                <v-window-item value="two" class="mt-3">
                  <div class="feature">
                    <h6 class="text-center text-teal-accent-4">KHẢ NĂNG IN</h6>
                    <v-list :items="Info.feature">
                      <template v-slot:prepend>
                        <v-icon
                          size="large"
                          color="green-darken-2"
                          icon="mdi-circle-small"
                        ></v-icon>
                      </template>
                    </v-list>
                  </div>
                  <div class="control">
                    <h6 class="text-center text-teal-accent-4">
                      ĐIỀU KHIỂN IN
                    </h6>
                    <v-list :items="Info.control" class="text-wrap">
                      <template v-slot:prepend>
                        <v-icon
                          size="large"
                          color="green-darken-2"
                          icon="mdi-circle-small"
                        ></v-icon>
                      </template>
                    </v-list>
                  </div>
                  <div class="special">
                    <h6 class="text-center text-teal-accent-4">ĐẶC TÍNH</h6>
                    <v-list :items="Info.special">
                      <template v-slot:prepend>
                        <v-icon
                          size="large"
                          color="green-darken-2"
                          icon="mdi-circle-small"
                        ></v-icon>
                      </template>
                    </v-list>
                  </div>
                </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
export default {
  components: "InfoProduct",
  setup() {
    const store = useAppStore();
    const { Info } = storeToRefs(store);
    return { Info };
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>
<style scoped>
img {
  max-width: 100%;
  height: 100%;
}

.card {
  max-width: 100%;
  height: auto;
}

p{
  font-size: 15px;
}
@media only screen and (max-width: 600px) {
  img {    
    width: 100%;
    height: 300px;
  }
}
</style>
