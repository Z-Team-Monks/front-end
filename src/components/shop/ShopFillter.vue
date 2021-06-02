<template>
  <div>
    <v-row class="">
      <v-col cols="3">
        <v-card class="mx-auto p-4" max-width="300" tile>
          <v-list>
            <div class="overline">Fillter Products</div>
            <v-list-item-group color="primary">
              <v-list-item-title>
                <v-list-item-content>
                  <v-subheader>Price Rage</v-subheader>
                  <v-range-slider
                    v-model="range"
                    :max="max"
                    step="100"
                    :min="min"
                    hide-details
                    class="align-center"
                  >
                    <template v-slot:prepend>
                      <v-text-field
                        :value="range[0]"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        type="number"
                        style="width: 60px"
                        @change="$set(range, 0, $event)"
                      ></v-text-field>
                    </template>
                    <template v-slot:append>
                      <v-text-field
                        :value="range[1]"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        type="number"
                        style="width: 60px"
                        @change="$set(range, 1, $event)"
                      ></v-text-field>
                    </template>
                  </v-range-slider>
                </v-list-item-content>
              </v-list-item-title>
              <v-list-item-title>
                <v-list-item-content>
                  <v-subheader>Rating Rage</v-subheader>
                  <v-range-slider
                    v-model="ratingRange"
                    :max="maxRating"
                    :min="minRating"
                    step="1"
                    hide-details
                    class="align-center"
                  >
                    <template v-slot:prepend>
                      <v-text-field
                        :value="ratingRange[0]"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        type="number"
                        style="width: 30px"
                        @change="$set(range, 0, $event)"
                      ></v-text-field>
                    </template>
                    <template v-slot:append>
                      <v-text-field
                        :value="ratingRange[1]"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        type="numbeshopr"
                        style="width: 30px"
                        @change="$set(range, 1, $event)"
                      ></v-text-field>
                    </template>
                  </v-range-slider>
                </v-list-item-content>
              </v-list-item-title>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col v-if="fillterCount == 0" cols="6">
        <h6>No Products </h6>
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
      @submitReview="submitReview"
      @hideModal="hideModal"
      :dialog="pd"
      :reviews="reviewsData"
      :hideDetailModal = "hideDetailModal"
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
      min: 0,
      maxRating: 5,
      minRating: 1,
      ratingRange: [1, 5],
      max: 800,
      range: [0, 800],
      rating: 2,
      length: 5,
      passData: false,
      p: "",
      pd: false,
      reviewsData: "",
    };
  },

  watch: {
    range(newVal, old) {
      console.log(newVal);
      this.products.forEach((s) => {
        if ((s.price >= newVal[0]) & (s.price <= newVal[1])) {
          s.isVisible = true;
        } else s.isVisible = false;
      });
    },
    ratingRange(newVal, old) {
      // this.products.forEach((s) => {
      //   if ((s.rating >= newVal[0]) & (s.rating <= newVal[1])) {
      //     s.isVisible = true;
      //   } else s.isVisible = false;
      // });
    },
  },
  created() {
    this.length = this.$store.state.product.product;
  },
  computed: {
    fillterCount() {
      let count = 0;
      this.products.forEach((s) => {
        if (s.isVisible == true) {
          count++;
        }
      });
      return count;
    },
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
      return this.pd;
    },
    ShopProducts() {
      return this.$store.state.shops.shopProducts;
    },
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
        console.log("handling it ");
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
    submitReview(review) {
      this.$store.dispatch("review/SubmitProductReview", {
        rating: review.rating,
        reviewString: review.reviewString,
        id: this.reviewsData.productId,
      });
    },
    hideDetailModal(e) {
      
    }
  },
  props: ["products"],
};
</script>

<style scoped>
.v-ripple__container {
  opacity: 0 !important;
}
</style>