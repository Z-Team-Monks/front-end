<template>
  <section class="product-area box-90 pt-70 pb-40">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-5 col-lg-12">
          <div class="area-title mb-50">
            <h2>Brand New Products</h2>
            <p>Browse the huge variety of our products</p>
          </div>
        </div>
        <div class="col-xl-7 col-lg-12">
          <div class="product-tab mb-40">
            <ul
              class="nav product-nav justify-content-xl-end"
              id="myTab1"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  >table lamp</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  >furniture</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  >chair</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="contact-tab1"
                  data-toggle="tab"
                  href="#contact9"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  >Clock</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> 
    <div class="row">
      <div class="col-xl-12">
        <div class="product-tab-content">
          <div class="tab-content" id="myTabContent">
            <carousel>
              <slide>
                <div class="ml-2 row">
                  <div class="col">
                    <ProductCard />
                  </div>
                  <div class="col">
                    <ProductCard />
                  </div>
                </div>
              </slide>
              <slide>
                <div class="ml-2 row">
                  <div class="col">
                    <ProductCard />
                  </div>
                  <div class="col">
                    <ProductCard />
                  </div>
                </div>
              </slide>
            </carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ProductCard from "@/components/product/ProductCard";
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    ProductCard,
    Carousel,
    Slide,
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  props: {},
};
</script>