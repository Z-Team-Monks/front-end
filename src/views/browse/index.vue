<template>
  <section class="shop-area">
    {{products}}
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-lg-8">
          <div class="shop-banner mb-50">
            <img src="../../assets/img/bg/shop-banner.jpg" alt="" />
          </div>
          <div class="row">
            <div class="col-xl-5 col-lg-6 col-md-6">
              <div class="product-showing mb-40">
                <p>Showing 1–22 of 32 results</p>
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
                    class="wrapper-shop col-xl-4 col-lg-6 col-md-6"
                    v-for="(product, i) in products"
                    :key="i"
                  >
                    <ProductCard :product="product" />
                  </div>
                </div>

              <div
                class="tab-pane fade show active"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <v-divider />
                <h2>No Products!</h2>
                <v-divider />
              </div>
            </div>
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
              <h3 class="shop-title">Search for Shops</h3>
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
    this.$store.dispatch("product/GetProducts");
  },
  data() {
    return {
      tags: [],
      searchQuery: "",
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
      return this.$store.state.product.products;
    },
    hasPaggination() {
      return this.$store.state.product.products
        ? this.$store.state.product.products.length <= 8
        : false;
    },
  },
  methods: {
    searchShop() {
      this.$store.dispatch("product/SearchProducts", {
        query: this.searchQuery,
      });
    },
  },
  props: {},
};
</script>