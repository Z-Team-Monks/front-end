<template>
  <main id="carousel py-4">
    <br />
    <br />
    <br />
    <VueSlickCarousel v-bind="settings" v-if="ads.length">
      <div class="item mb-3" v-for="(ad, i) in ads" :key="i">
        <v-card class="mx-auto border" max-width="344">
          <v-card-text>
            <h4>{{ ad.shop.shopName }}</h4>
            <p class="text--primary">
              {{ ad.description }}
            </p>
            <div>
              <span class="text-decoration-line-through">
                {{ ad.discount }} off all prices
              </span>
              % until {{ ad.endDate }}
            </div>
          </v-card-text>
          <v-card-actions>
            <router-link :to="{name :'shop' , params : { id : ad.shop.id}}" text color="teal accent-4" ripple> Check shop out </router-link>
          </v-card-actions>
        </v-card>
      </div>
    </VueSlickCarousel>
  </main>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  data: () => ({
    reveal: false,
    selection: 1,
    settings: {
      infinite: true,
      slidesToShow: 5,
      rows: 1,
    },
  }),
  computed: {
    ads() {
      return this.$store.state.ads.allAds;
    },
  },
  created() {
    this.$store.dispatch("ads/GetAllAds");
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
