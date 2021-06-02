<template>
  <div>
    <v-row class="">
      <v-col cols="3">
        <v-card class="mx-auto p-4" max-width="300" tile>
          <v-list>
            <div class="overline">Fillter Products</div>
            <v-divider />
            <v-list-item-group color="primary">
              <v-list-item-title>
                <v-list-item-content>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label class="form-check-label" for="defaultCheck1">
                      Default checkbox
                    </label>
                  </div>
                </v-list-item-content>
              </v-list-item-title>
              <v-list-item-title>
                <v-list-item-content>
                  <v-subheader>Price Rage</v-subheader>
                  <v-range-slider max="50" min="-50"></v-range-slider>
                </v-list-item-content>
              </v-list-item-title>
              <v-list-item-title>
                <v-list-item-content>
                  <v-subheader>Rating Rage</v-subheader>
                  <v-range-slider max="50" min="-50"></v-range-slider>
                </v-list-item-content>
              </v-list-item-title>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="9">
        <v-row>
          <v-col cols="4" v-for="(product, i) in products" :key="i">
            <ShopProductCard
              @showProductDetail="handleProductDetail(product.productId)"
              :product="product"
              @productReview="handleProductReview(product.productId)"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <Detail v-if="pass" @hideModal="hideModal" :dialog="pass" :prod="p" />
    <ProductReviewModal
      v-if="passReview"
      @hideModal="hideModal"
      :dialog="true"
      :reviews="reviewsData"
    />
  </div>
</template>
<script>
import ShopProductCard from "@/components/shop/ShopProductCard";
import Detail from "@/components/shop/DetailModal";
import ProductReviewModal from "@/components/shop/ProductReviewModal";
export default {
  components: {
    ShopProductCard,
    Detail,
    ProductReviewModal,
  },
  data() {
    return {
      selectedItem: 1,
      items: [
        { text: "Real-Time", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi-flag" },
      ],
      dialog: false,
      description: "",
      rating: 2,
      length: 5,
      passData: false,
      p: "",
      pd: false,
      reviewsData: "",
    };
  },
  created() {
    this.length = this.$store.state.product.product;
  },
  computed: {
    len() {
      return this.length;
    },
    prod() {
      return this.$store.state.product.product;
    },
    checkIf(pr) {
      return pr == this.$store.state.product.product;
    },
    pass() {
      return this.passData;
    },
    passReview() {
      return this.pd
    }
  },   
  methods: {
    handleProductDetail(id) {
      this.$store.dispatch("product/GetProductByID", id).then((e) => {
        this.p = this.$store.state.product.product;
      });
      this.passData = true;
    },

    handleProductReview(id) {
      if (this.$store.state.product.product) {
        this.reviewsData = this.$store.state.product.product.productReviews;
        this.pd = true;
      } else {
        console.log("handling it ")
        this.$store.dispatch("product/GetProductByID", id).then((e) => {
          this.reviewsData = this.$store.state.product.product.productReviews;
          this.pd = true;
        });
      }
    },
    productReview(id) {
      this.$store.dispatch("product/GetProductByID", id);
    },
    hideModal(e) {
      this.passData = false;
      this.pd = false;
    },
  },
  props: ["products"],
};
</script>

<style scoped>
.v-ripple__container {
  opacity: 0 !important;
}
</style>