<template>
  <section class="product-area box-90 pt-70 pb-20">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-5 col-lg-12">
          <div class="area-title mb-50">
            <h2>Brand New Shops</h2>
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
    <v-divider></v-divider>
    <VueSlickCarousel :dots="true" v-bind="settings" v-if="shops.length">
      <div v-for="(shop, n) in shops" class="mr-5" :key="n">
        <div v-if="shop.isVisible">
          <HopShopCard @NearByModal="showModal(shop.shopId)" :shop="shop" />
        </div>
      </div>
    </VueSlickCarousel>
    <v-divider></v-divider>
    <div v-if="showModalWatch && singleShopWatch">
      <NearByModal
        v-if="showModalWatch && singleShopWatch"
        :show="showDialogWatch"
        :whereTo="singleShopWatch"
        @emitHideModal="emitHideModal"
      />
    </div>

    <!-- end -->
  </section>
</template>
<script>
import ProductCard from "@/components/product/ProductCard";
import NearByModal from "@/views/map/NearByModal";
import HopShopCard from "@/components/home/HopShopCard";
import { Carousel, Slide } from "vue-carousel";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import axios from "axios";

export default {
  components: {
    ProductCard,
    Carousel,
    Slide,
    VueSlickCarousel,
    HopShopCard,
    NearByModal,
    // ProductDetailModal,
  },
  data() {
    return {
      multiLine: true,
      dialog: false,
      settings: {
        infinite: true,
        slidesToShow: 6,
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
      passProp: false,
      showDialog: false,
      SingleShop: {},
    };
  },
  created() {
    this.$store.dispatch("shops/GetAllShops");
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
    shops() {
      return this.$store.state.shops.allShops;
    },
    selectedProduct() {
      return this.currentProduct;
    },

    categories() {
      return this.$store.state.category.categories;
    },
    // shop() {
    //   return this.$store.state.shops.allShops;
    // },
    showModalWatch() {
      return this.passProp;
    },
    showDialogWatch() {
      return this.showDialog;
    },
    singleShopWatch() {
      console.log("update me please");
      return this.SingleShop;
    },
  },

  watch: {
    category(newVal, oldVal) {
      this.shops.forEach((s) => {
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
      console.log("added to cart");
      this.$store.dispatch("message/SaveMessage", "Added to cart!");
      this.$store.dispatch("message/ShowNotification");

      this.dialog = false;
    },

    showModal(id) {
      this.getShop(id);
    },
    emitHideModal() {
      this.showDialog = false;
      this.passProp = false;
    },

     getShop(id) {
       axios
        .get(`/shops/${id}`)
        .then((res) => {
          this.showDialog = true;
          this.passProp = true;
          console.log("--------==========");
          console.log(res.data);
          console.log("--------==========");
          this.SingleShop = res.data;
          return res.data;
        })
        .catch((e) => {
          console.log(e);
        });
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