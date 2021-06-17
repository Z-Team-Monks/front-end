<template>
  <div>
    <v-row class="">
      <v-col cols="3">
        <v-card class="mx-auto p-4" max-width="300" tile>
          <v-list>
            <v-list-item v-if="mine">
              <v-btn
                small
                block
                @click="addModal = !addModal"
                outlined
                color="indigo"
              >
                Add Product
              </v-btn>
            </v-list-item>
            <v-list-item v-if="mine">
              <v-btn
                small
                block
                @click="adsModal = !adsModal"
                outlined
                color="indigo"
              >
                Request Ads
              </v-btn>
            </v-list-item>
            <v-list-item>
              <div class="overline mr-5">Fillter Products</div>
            </v-list-item>
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
        <h6>No Products</h6>
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
    <!-- Add Product Modal -->
    <v-dialog v-model="addModal" max-width="500px">
      <v-card>
        <v-card-title class="border-bottom">
          <span class="headline">Add Product</span>
        </v-card-title>
        <v-form>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-col cols="12">
                    <input type="file" @change="getFile" name="file" id="" />
                  </v-col>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="productName"
                    placeholder="Product Name"
                    prepend-icon="mdi-store-24-hour "
                  />
                </v-col>
                <v-col cols="12">
                  <v-select
                    prepend-icon="mdi-shape"
                    v-model="categoryId"
                    :items="categories"
                    label="Categorey"
                    item-text="categoryName"
                    item-value="id"
                    dense
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="price"
                    type="number"
                    placeholder="Price"
                    prepend-icon="mdi-currency-usd"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="discount"
                    type="number"
                    placeholder="Discount in percent"
                    prepend-icon="mdi-currency-usd"
                  />
                </v-col>

                <v-col>
                  <v-textarea
                    rows="1"
                    v-model="description"
                    prepend-icon="mdi-semantic-web"
                    placeholder="Description"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="red lighten--4 darken-1"
              text
              @click="addModal = !addModal"
            >
              Cancel
            </v-btn>
            <v-btn color="red lighten--4 darken-1" @click="AddProduct" text>
              Add Product
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <!-- Request Ads -->

    <v-dialog v-model="adsModal" max-width="500px">
      <v-card>
        <v-card-title class="border-bottom">
          <span class="headline">Add Ads</span>
        </v-card-title>
        <v-form>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="discount"
                    type="number"
                    placeholder="Discount in percent"
                    prepend-icon="mdi-currency-usd"
                  />
                </v-col>
                <v-col>
                  <v-textarea
                    rows="1"
                    v-model="description"
                    prepend-icon="mdi-semantic-web"
                    placeholder="Description"
                  ></v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-menu
                    v-model="menu1"
                    :close-on-content-click="false"
                    max-width="290"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        :value="startDateComputed"
                        clearable
                        label="Start Date"
                        readonly
                        prepend-icon="mdi-google-ads"
                        v-bind="attrs"
                        v-on="on"
                        @click:clear="startDate = null"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="startDate"
                      @change="menu1 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12">
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    max-width="290"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        :value="endDateComputed"
                        clearable
                        label="Start Date"
                        readonly
                        prepend-icon="mdi-google-ads"
                        v-bind="attrs"
                        v-on="on"
                        @click:clear="endDate = null"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="endDate"
                      @change="menu2 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="red lighten--4 darken-1"
              text
              @click="adsModal = !adsModal"
            >
              Cancel
            </v-btn>
            <v-btn color="red lighten--4 darken-1" @click="RequestAds" text>
              Request Ads
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>

    <Detail
      @addToCart="addToCart"
      v-if="pass"
      @hideModal="hideModal"
      :dialog="pass"
      :prod="p"
    />
    <ProductReviewModal
      v-if="passReview"
      @submitReview="submitReview"
      @hideModal="hideModal"
      :dialog="pd"
      :reviews="reviewsData"
      :hideDetailModal="hideDetailModal"
    />
  </div>
</template>
<script>
import axios from "axios";
import ShopProductCard from "@/components/shop/ShopProductCard";
import Detail from "@/components/shop/DetailModal";
import ProductReviewModal from "@/components/shop/ProductReviewModal";
import moment from "moment";

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
      startDate: "",
      endDate: "",
      discount: "",
      productImg: "",
      productName: "",
      dateInserted: "",
      brand: "",
      description: "",
      categoryId: 0,
      price: 0,
      condition: "",
      imageUrl: "",
      deliveryAvailable: true,
      productCount: 0,

      dialog: false,
      addModal: false,
      adsModal: false,
      description: "",
      min: 0,
      maxRating: 5,
      minRating: 0,
      ratingRange: [0, 5],
      max: 50000,
      range: [0, 50000],
      rating: 2,
      length: 5,
      passData: false,
      p: "",
      pd: false,
      reviewsData: "",
      pid: "",

      categoryId: "",

      menu1: false,
      menu2: false,
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
    this.$store.dispatch("category/GetCategories");
  },
  computed: {
    endDateComputed() {
      return this.endDate ? moment(this.endDate).format("dddd, MMMM Do YYYY") : "";
    },
    startDateComputed() {
      return this.startDate ? moment(this.startDate).format("dddd, MMMM Do YYYY") : "";
    },
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
    categories() {
      return this.$store.state.category.categories;
    },
    isAuthenticated() {
      return this.$store.state.shops.shop && localStorage.getItem("user")
        ? this.$store.state.shops.shop.ownerId ===
            JSON.parse(localStorage.getItem("user")).userId
        : false;
    },
  },
  methods: {
    RequestAds(e) {
        let data = {
          discount : parseFloat(this.discount),
          description : this.description,
          startDate : this.startDate,
          endDate : this.endDate,
          shopId : parseInt(this.$route.params.id)
        };
        
        this.$store.dispatch("ads/CreateAd" ,data ).then(res => {
          this.discount = ""
          this.description = ""
          this.startDate = ""
          this.endDate = ""
          this.addModal = false
        })
    },
    handleProductDetail(id) {
      this.$store.dispatch("product/GetProductByID", id).then((e) => {
        this.p = this.$store.state.product.product;
      });
      localStorage.setItem("selectedProduct" , id)
      this.passData = true;
      console.log("[[[[[[[id]]]]]]]");
      console.log(id);
      console.log("[[[[[[[id]]]]]]]");
      // this.pid = id.productId;
    },
    getFile(e) {
      this.productImg = e.target.files[0];
    },
    handleProductReview(id) {
      this.pid = id;

      console.log(id)
      if (this.$store.state.product.product) {
        axios
          .get(`/products/${id}/reviews`)
          .then((res) => {
            console.log(res.data);
            this.reviewsData = res.data.productReviews;
            this.pd = false;
            this.pd = true;
          })
          .catch((e) => console.log(e));
      } else {
        console.log("handling it ");
        axios
          .get(`/products/${id}/reviews`)
          .then((res) => {
            this.reviewsData = res.data.productReviews;
            this.pd = false;
            this.pd = true;
          })
          .catch((e) => console.log(e));
      }

      console.log(this.pid);
    },

    addToCart() {
      this.$store.dispatch("shops/AddToCart", parseInt(this.pid));
    },
    AddProduct() {
      let product = {
        shopId: parseInt(this.$route.params.id),
        productName: this.productName,
        description: this.description,
        categoryId: this.categoryId,
        price: parseInt(this.price),
        condition: "New",
        discount: parseInt(this.discount),
        // productCount: this.productCount,
      };

      let formData = new FormData();
      formData.append("file", this.productImg);

      this.$store
        .dispatch("product/StoreProduct", { product, formData })
        .then((r) => {
          this.addModal = false;
          this.$store.dispatch("category/GetCategories");
        });
    },
    productReview(id) {
      this.$store.dispatch("product/GetProductByID", id);
    },
    hideModal(e) {
      this.passData = false;
      this.pd = false;
    },
    submitReview(review) {
      console.log(review);
      // console.
      this.$store.dispatch("product/PostReview", {
        rating: review.rating,
        comment: review.comment,
        id: this.pid ,
      });
    },
    hideDetailModal(e) {},
  },
  props: ["products", "mine"],
};
</script>

<style scoped>
.v-ripple__container {
  opacity: 0 !important;
}
</style>