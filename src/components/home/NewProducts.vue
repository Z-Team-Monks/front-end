<template>
  <section class="product-area box-90 pt-70 pb-20">
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
            <v-row justify="space-around">
              <v-col cols="12" sm="10" md="8">
                <v-sheet class="py-4 px-1">
                  <v-chip-group
                    multiple
                    v-model="category"
                    active-class="primary--text"
                  >
                    <v-chip
                      v-for="tag in categories"
                      :value="tag.categoryId"
                      :key="tag.categoryId"
                    >
                      {{ tag.categoryName }}
                    </v-chip>
                  </v-chip-group>
                </v-sheet>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </div>

    <VueSlickCarousel :dots="true" v-bind="settings" v-if="products.length">
      <div v-for="(product, n) in products" class="mr-5" :key="n">
        <div v-if="product.isVisible">
          <ProductCard
            :product="product"
            @emitAddToCart="AddToCart(product)"
            @emitProductDetail="showDetailModal(product)"
          />
        </div>
      </div>
    </VueSlickCarousel>

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
          <v-container>
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
              <v-col cols="6" v-if="selectedProduct">
                <div class="details-cat mb-20">
                  {{ selectedProduct.brandName }}
                </div>
                <h2 class="pro-details-title">
                  {{ selectedProduct.productName }}
                </h2>
                <div class="details-price mb-20">
                  <span>{{ selectedProduct.price }}ETB</span>
                  <span class="old-price">45.00 ETB</span>
                </div>

                <div class="product-desc variant-item">
                  <p>
                    {{ selectedProduct.description }}
                  </p>
                </div>
                <v-row>
                  <v-col>
                    <v-btn
                      @click="AddToCart(selectedProduct)"
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
          </v-container>
        </v-card>
      </v-dialog>
    </v-row>

    <v-snackbar :value="snackbar" :multi-line="multiLine">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="hideMessage">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <!-- end -->
  </section>
</template>
<script>
import ProductCard from "@/components/product/ProductCard";
import { Carousel, Slide } from "vue-carousel";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    ProductCard,
    Carousel,
    Slide,
    VueSlickCarousel,
    // ProductDetailModal,
  },
  data() {
    return {
      multiLine: true,
      dialog: false,
      settings: {
        infinite: true,
        slidesToShow: 5,
        rows: 1,
      },
      category: [],
      tags: [
        "Work",
        "Home Improvement",
        "Vacation",
        "Food",
        "Drawers",
        "Shopping",
        "Art",
        "Tech",
        "Creative Writing",
      ],
      currentProduct: {},
    };
  },
  created() {
    this.$store.dispatch("product/GetProductWithLimit");
    this.$store.dispatch("category/GetCategories");
    this.$store.dispatch("message/HideNotification");
  },
  computed: {
    snackbar() {
      return this.$store.state.message.showSnack;
    },

    text() {
      return this.$store.state.message.message;
    },
    modalShow() {
      return this.dialog;
    },
    products() {
      return this.$store.state.product.products;
    },
    selectedProduct() {
      return this.currentProduct;
    },

    categories() {
      return this.$store.state.category.categories;
    },
  },

  watch: {
    category(newVal, oldVal) {
      console.log("this");
      this.products.forEach((s) => {
        if (newVal.length != 0) {
          if (newVal.includes(s.categoryId)) {
            s.isVisible = true;
          } else {
            console.log("this");

            s.isVisible = false;
          }
        } else s.isVisible = true;
      });
    },
  },
  methods: {
    showDetailModal(product) {
      this.dialog = true;
      this.currentProduct = product;
    },
    closeModal(e) {
      this.dialog = false;
    },
    hideMessage(e) {
      this.$store.dispatch("message/HideNotification");
    },
    AddToCart(product) {
      console.log(product.productId);
      this.$store.dispatch("shops/AddToCart" , product.productId)
      console.log("added to cart");
      this.$store.dispatch("message/SaveMessage", "Added to cart!");
      this.$store.dispatch("message/ShowNotification");
      this.dialog = false;
    },
  },
  props: {},
};
</script>

<style scoped>
/* the slides */
.slick-slide {
  margin: 0 27px;
}
/* the parent */
.slick-list {
  margin: 0 -27px;
}
</style>