<template>
  <section class="shop-area">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-lg-8">
          <div class="shop-banner mb-50">
            <img :src="bannerProductImg" alt="" />
          </div>
          <div class="row">
            <div class="col-xl-5 col-lg-6 col-md-6 mb-0 pb-0">
              <div class="product-showing mb-40">
                <p>
                  Showing {{ products.length }} of {{ products.length }} results
                </p>
              </div>
            </div>
          </div>

          <!-- tab content -->
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div class="row"></div>
            </div>
            <div
              v-if="products"
              class="tab-pane fade show active"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div class="row">
                <div
                  class="col-xl-4 col-lg-6 col-md-6"
                  v-for="(product, i) in products"
                  :key="i"
                >
                  <ProductCard
                    @emitProductDetail="showProductDetail(product)"
                    :product="product"
                    @emitAddToCart="AddToCart(product)"
                  />
                </div>
              </div>
            </div>

            <!-- <div
              v-if="vissibleProducts !=products"
              class="tab-pane fade show active"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <v-divider />
              <h2>No Shops!</h2>
              <v-divider />
            </div> -->
          </div>
          <div
            v-if="hasPaggination"
            class="basic-pagination basic-pagination-2 text-center mt-50"
          >
            <ul>
              <li>
                <a href="#"><i class="fas fa-angle-double-left"></i></a>
              </li>
              <li><a href="#">01</a></li>
              <li class="active"><a href="#">02</a></li>
              <li><a href="#">03</a></li>
              <li>
                <a href="#"><i class="fas fa-ellipsis-h"></i></a>
              </li>
              <li>
                <a href="#"><i class="fas fa-angle-double-right"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4">
          <div class="sidebar-shop">
            <div class="shop-widget">
              <h3 class="shop-title">Search for Products</h3>
              <form @submit.prevent="searchShop" class="shop-search">
                <input
                  type="text"
                  v-model="searchQuery"
                  placeholder="Your keyword...."
                />
                <button><i class="fa fa-search"></i></button>
              </form>
            </div>

            <div class="shop-widget">
              <h3 class="shop-title mb-2">Categories</h3>
              <ul class="shop-tag">
                <v-chip-group v-model="tags" column multiple>
                  <v-chip
                    filter
                    :value="c.categoryId"
                    outlined
                    v-for="(c, i) in categories"
                    :key="i"
                  >
                    {{ c.categoryName }}
                  </v-chip>
                </v-chip-group>
              </ul>
            </div>

            <div class="shop-widget">
              <div class="shop-sidebar-banner">
                <img src="../../assets/img/banner/shop-banner.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
                :src="selectedProduct.imageUrl ? selectedProduct.imageUrl : 'https://images.unsplash.com/photo-1473187983305-f615310e7daa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'"
              ></v-img>
            </v-col>
            <!-- <v-col cols="1" /> -->

            <v-col v-if="currentProductWatch" cols="6">
              <div class="details-cat mb-20">
                {{ currentProductWatch.brand }}
              </div>
              <h2 class="pro-details-title">
                {{ currentProductWatch.productName }}
              </h2>
              <div class="details-price mb-20">
                <span>{{ currentProductWatch.price }}</span>
                <span class="old-price">$246.00</span>
              </div>

              <div class="product-desc variant-item pb-0">
                <p>{{ currentProductWatch.description }}</p>
              </div>

              <v-col>
                <v-btn
                  @click="AddToCart(currentProductWatch)"
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
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
    </v-row>
  </section>
</template>
<script>
import ProductCard from "@/components/product/ProductCard";
export default {
  components: {
    ProductCard,
  },
  created() {
    this.$store.dispatch("category/GetCategories");
    this.$store.dispatch("shops/GetAllProductsInDB");
    setInterval(this.changeBannerProductImage, 2000);
  },
  data() {
    return {
      tags: [],
      searchQuery: "",
      dialog: false,
      selectedProduct: {},
      pagging: false,
      currentProduct: {},
      bannerImages: [
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636__340.png",
      ],
      bannerProductImg:
        "https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636__340.png",
      bannerProductImgCounter: 0,
    };
  },
  watch: {
    tags(newVal, old) {
      this.products.forEach((s) => {
        if (newVal.length != 0) {
          if (newVal.includes(s.categoryId)) {
            s.isVisible = true;
          } else {
            s.isVisible = false;
          }
        } else s.isVisible = true;
      });
    },
  },
  computed: {
    categories() {
      return this.$store.state.category.categories;
    },
    products() {
      return this.$store.state.shops.products;
    },
    hasPaggination() {
      console.log("has pagging update");
      let count = 0;
      this.$store.state.shops.products.forEach((p) => {
        if (p.isVisible == true) {
          console.log("old that young");
          count++;
        }
      });
      return count > 9;
    },
    currentProductWatch() {
      return this.selectedProduct;
    },

    vissibleProducts() {
      let count = 0;
      this.$store.state.shops.products.forEach((p) => {
        if (p.isVisible == true) {
          console.log("old that young");
          count++;
        }
      });

      return count;
    },
  },
  methods: {
    searchShop() {
      console.log("saerch shop");
      this.$store.dispatch("shops/SearchProducts", { query: this.searchQuery });
    },
    showProductDetail(product) {
      this.currentProduct = product;
      console.log("emited show product detail");
      this.dialog = true;
      this.selectedProduct = product;
    },
    AddToCart(product) {
      console.log("add to cart");
      this.$store.dispatch("shops/AddToCart" , product.productId)
      this.dialog = false
    },
    changeBannerProductImage() {
      // console.log(this.bannerProductImg);
      this.bannerProductImg = this.bannerImages[this.bannerProductImgCounter];
      this.bannerProductImgCounter =
        (this.bannerProductImgCounter + 1) % this.bannerImages.length;
    },
  },
  props: {},
};
</script>


<style scoped>
.shop-banner img {
  width: 85%;
  height: 400px;
}
</style>