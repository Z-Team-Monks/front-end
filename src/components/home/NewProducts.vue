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
                    <ProductCard @emitProductDetail="showDetailModal" />
                  </div>
                  <div class="col">
                    <ProductCard @emitProductDetail="showDetailModal" />
                  </div>
                </div>
              </slide>
              <slide>
                <div class="ml-2 row">
                  <div class="col">
                    <ProductCard @emitProductDetail="showDetailModal" />
                  </div>
                  <div class="col">
                    <ProductCard @emitProductDetail="showDetailModal" />
                  </div>
                </div>
              </slide>
            </carousel>
          </div>
        </div>
      </div>
    </div>

    <!--  do not be lazy nati move it to its own component -->
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="850">
        <v-card class="p-3">
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              icon
              x-small
              color="green darken-1"
              text
              @click="dialog = !dialog"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-actions>
          <v-row>
            <v-col cols="5">
              <v-img
                contain
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="300"
                max-width="300"
                src="https://picsum.photos/id/11/500/300"
              ></v-img>
            </v-col>
            <!-- <v-col cols="1" /> -->
            <v-col cols="6">
              <div class="details-cat mb-20">
                <a href="#">decor,</a>
                <a href="#">furniture</a>
              </div>
              <h2 class="pro-details-title">Limonda Women</h2>
              <div class="details-price mb-20">
                <span>$119.00</span>
                <span class="old-price">$246.00</span>
              </div>

              <div class="product-desc variant-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </p>
              </div>
              <v-row>
                <v-col cols="4">
                  <v-btn fab elevation="0" color="red lighten-4" x-small>
                    <v-icon small> mdi-arrow-up </v-icon>
                  </v-btn>
                  <p class="mx-2 d-inline-block">1</p>
                  <v-btn fab elevation="0" color="red lighten-4" x-small>
                    <v-icon small> mdi-arrow-down </v-icon>
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn
                    class="ml-2"
                    outlined
                    color="red lighten--4"
                    dark
                    tile
                    block
                  >
                    <v-icon left>mdi-cart</v-icon>
                    Add To Cart
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
    </v-row>
    <!-- end -->
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
    // ProductDetailModal,
  },
  data() {
    return {
      dialog: false,
    };
  },
  created() {},
  computed: {
    modalShow() {
      return this.dialog;
    },
  },
  methods: {
    showDetailModal(a) {
      this.dialog = true;
    },
    closeModal(e) {
      this.dialog = false;
    },
  },
  props: {},
};
</script>