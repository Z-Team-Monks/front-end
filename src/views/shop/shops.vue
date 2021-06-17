<template>
  <section class="shop-area">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-lg-8">
          <div class="shop-banner mb-50">
            <img :src="bannerImg" alt="" />
          </div>
          <div class="row">
            <div class="col-xl-5 col-lg-6 col-md-6">
              <div class="product-showing mb-40">
                <p>Showing 1–13 of 13 results</p>
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
              v-if="shops.length != 0"
              class="tab-pane fade show active"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div class="wrapper-shop" v-for="(shop, i) in shops" :key="i">
                <ShopsCard
                  :shop="shop"
                  @unfollow="unfollow(shop.shopId)"
                  @followShop="followShop(shop.shopId)"
                />
              </div>
            </div>

            <div
              v-else
              class="tab-pane fade show active"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <v-divider />
              <h2>No Shops!</h2>
              <v-divider />
            </div>
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
import ShopsCard from "@/components/shop/ShopsCard";
export default {
  components: {
    ShopsCard,
  },
  created() {
    this.$store.dispatch("category/GetCategories");
    this.$store.dispatch("shops/GetAllShops");
    setInterval(this.changeAdBanner, 3000);
  },
  data() {
    return {
      tags: [],
      searchQuery: "",
      bannerImgs: [
        "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob3BwaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://cdn.pixabay.com/photo/2015/10/12/15/18/clothing-store-984396__340.jpg",
        "https://cdn.pixabay.com/photo/2015/09/21/14/24/supermarket-949913__340.jpg",
        "https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
      bannerImgCounter: 0,
      bannerImg:
        "https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    };
  },
  watch: {
    tags(newVal, old) {
      this.shops.forEach((s) => {
        if (newVal.length != 0) {
          if (newVal.includes(s.category_id)) {
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

    shops() {
      return this.$store.state.shops.allShops;
    },
    hasPaggination() {
      return this.$store.state.shops.allShops.length <= 8;
    },
  },
  methods: {
    searchShop() {
      this.$store.dispatch("shops/SearchShop", { query: this.searchQuery });
    },
    followShop(id) {
      this.$store.dispatch("shops/FollowShop", id);
    },

    unfollow(id) {
      this.$store.dispatch("shops/UnFollowShop", id);
    },
    changeAdBanner() {
      this.bannerImg = this.bannerImgs[this.bannerImgCounter];
      this.bannerImgCounter =
        (this.bannerImgCounter + 1) % this.bannerImgs.length;
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