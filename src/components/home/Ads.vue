<template>
  <div>
    <section class="banner-area pt-30 pl-15 pr-15">
      <div class="container-fluid">
        <div class="row">
          <div v-for="x in 3" :key="x" class="col-lg-4 col-md-6">
            <div class="banner mb-30">
              <a href="shop.html"
                ><img src="../../assets/img/banner/banner-1/banner1.jpg" alt=""
              /></a>
            </div>
          </div>
          <!-- <div class="col-lg-4 col-md-6">
            <div class="banner mb-30">
              <a href="shop.html"
                ><img src="../../assets/img/banner/banner-1/banner2.jpg" alt=""
              /></a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="banner mb-30">
              <a href="shop.html"
                ><img src="../../assets/img/banner/banner-1/banner3.jpg" alt=""
              /></a>
            </div>
          </div> -->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    // this.$store.dispatch("shops/Ads")
  },
  computed: {
    // ads() {
    //   return this.$store.state.shops.ads
    // }
  },
  methods: {},
  props: {
    ads: {
      type: Array,
      required: false,
    },
  },
};
</script>
