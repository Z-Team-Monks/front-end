<template>
  <section class="shop-area">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-lg-8">
          <div class="shop-banner mb-50">
            <img src="../../assets/img/bg/shop-banner.jpg" alt="" />
          </div>
          <!-- tab filter -->
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
              class="tab-pane fade show active " 
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <!-- <div class="border-bottom mb-1"></div> -->
              <ShopsCard v-for="(shop, i) in shops" :key="i" :shop="shop" />
            </div>
          </div>
          <div v-if="shops.length != 0" class="basic-pagination basic-pagination-2 text-center mt-50">
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
                <v-chip-group v-model="neighborhoods" column multiple>
                  <!-- <v-chip filter outlined> Electronics </v-chip> -->
                  <!-- <v-chip filter outlined> Mobile Phone </v-chip> -->
                  <!-- <v-chip filter outlined> Men Clothing </v-chip> -->
                  <!-- <v-chip filter outlined> Furniture </v-chip> -->
                  <v-chip
                    filter
                    @change="categoryChange"
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
                <!-- <router-link href="shop.html"> -->

                <img src="../../assets/img/banner/shop-banner.jpg" alt="" />
                <!-- </router-link> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ShopsCard from "@/components/shop/ShopsCard";
export default {
  components: {
    ShopsCard,
  },
  created() {
    this.$store.dispatch("category/GetCategories");
    this.$store.dispatch("shops/GetAllShops");
  },
  data() {
    return {
      neighborhoods: [],
      searchQuery: "",
    };
  },

  computed: {
    categories() {
      return this.$store.state.category.categories;
    },
    shops() {
      return this.$store.state.shops.allShops;
    },
  },
  methods: {
    categoryChange() {
      console.log("it is changing");
      let c = this.shops;
      if (c.length != 0) {
        c.forEach((e) => {
          if (!this.neighborhoods.includes(e.categoryId)) {
            e.isVisible = false;
          } else {
            e.isVisible = true;
          }
        });
        console.log(c);
      }
    },
    searchShop() {
      this.$store.dispatch("shops/SearchShop", { query: this.searchQuery });
    },
  },
  props: {},
};
</script>