<template>
  <main>
    <!-- slider-area start -->
    <section class="slider-area pos-relative">
      <div class="slider-active">
        <div
          class="single-slider slide-1-style slide-height d-flex align-items-center"
          data-background="../../assets/img/slider/slide1.jpg"
        >
          <div class="shape-title bounce-animate">
            <h2>UX</h2>
          </div>
          <div class="shape-icon bounce-animate">
            <img src="../../assets/img/slider/shape-icon.png" alt="" />
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-7">
                <div class="slide-content">
                  <span data-animation="fadeInRight" data-delay=".2s"
                    >Find your Nearest</span
                  >
                  <h1 data-animation="fadeInUp" data-delay=".5s">
                    Find what you need, where ever you are
                  </h1>
                  <div class="slide-btn">
                    <router-link
                      to="/browse"
                      class="btn theme-btn"
                      data-animation="fadeInLeft"
                      data-delay=".7s"
                      >shop now</router-link
                    >
                    <router-link
                      to="/browse"
                      class="btn white-btn"
                      data-animation="fadeInRight"
                      data-delay=".9s"
                      >category</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- slider-area end -->

    <!-- banner area start -->
    <section class="banner-area pt-30 pl-15 pr-15">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="banner mb-30">
              <a href="shop.html"
                ><img src="../../assets/img/banner/banner-1/banner1.jpg" alt=""
              /></a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
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
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  props: {},
};
</script>
