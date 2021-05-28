<template>
  <div>
    <section class="shop-area pt-50 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-8">
            <div class="shop-banner mb-50">
              <img src="../../assets/img/bg/shop-banner.jpg" alt="" />
            </div>
            <div class="row mb-10">
              <div class="col-xl-5 col-lg-6 col-md-6">
                <div class="product-showing mb-40">
                  <p>Showing 1–22 of 32 results</p>
                </div>
              </div>
              <div class="col-xl-7 col-lg-6 col-md-6">
                <div class="shop-tab f-right">
                  <ul class="nav text-center" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                        ><i class="fas fa-list-ul"></i>
                      </a>
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
                        ><i class="fas fa-th-large"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div class="pro-filter mb-40 f-right">
                  <form action="#">
                    <select name="pro-filter" id="pro-filter">
                      <option value="1">Shop By</option>
                      <option value="2">Top Sales</option>
                      <option value="3">New Product</option>
                      <option value="4">A to Z Product</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <ProductCard  @emitProductDetail = "showProductDetail"  @emitAddToCart = "AddToCart" />
              </div>
              <div class="col">
                <ProductCard />
              </div>
            </div>
            <ShopContent />

            <div class="text-center">
              <v-pagination v-model="page" :length="4" circle></v-pagination>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4">
            <div class="sidebar-box">
              <div class="shop-widget">
                <h3 class="shop-title">Search by</h3>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </div>

              <div class="shop-widget">
                <h3 class="shop-title">Brand</h3>
                <ul class="shop-link">
                  <li>
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    Apex
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />Bata
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    Puma
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    Nike
                  </li>
                </ul>
              </div>

              <div class="shop-widget">
                <h3 class="shop-title">Price Range</h3>
                <div class="price-filter">
                  <v-range-slider
                    v-model="range"
                    :max="max"
                    :min="min"
                    hide-details
                    class="align-center"
                  >
                  </v-range-slider>
                </div>
              </div>

              <div class="shop-widget">
                <h3 class="shop-title">Price filter</h3>
                <ul>
                  <li class="my-3">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    &nbsp;&nbsp;&nbsp;£50.00 - £100.00
                  </li>
                  <li class="my-3">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    &nbsp;&nbsp;&nbsp;£50.00 - £100.00
                  </li>
                  <li class="my-3">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    &nbsp;&nbsp;&nbsp;£50.00 - £100.00
                  </li>
                  <li class="my-3">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    &nbsp;&nbsp;&nbsp;£50.00 - £100.00
                  </li>
                </ul>
              </div>

              <div class="shop-widget">
                <h3 class="shop-title">Catergories</h3>
                <ul class="shop-link">
                  <li>
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    Accessories
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    Bags
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    Clothing
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    Shoes
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    Exclusive
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    Uncategorized
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    Women
                  </li>
                </ul>
              </div>

              <div class="shop-widget">
                <h3 class="shop-title">Tags</h3>
                <ul class="shop-tag">
                  <li><a href="shop.html"> Minimal</a></li>
                  <li><a href="shop.html"> T-Shirts</a></li>
                  <li><a href="shop.html"> Pants</a></li>
                  <li><a href="shop.html"> Jeants</a></li>
                  <li><a href="shop.html"> Winter</a></li>
                  <li><a href="shop.html"> Latest</a></li>
                  <li><a href="shop.html"> New</a></li>
                  <li><a href="shop.html"> Sale</a></li>
                </ul>
              </div>
              <div class="shop-widget">
                <div class="shop-sidebar-banner">
                  <a href="shop.html"
                    ><img src="../../assets/img/banner/shop-banner.jpg" alt=""
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fullscreen search -->
    <div class="search-wrap">
      <div class="search-inner">
        <i class="fas fa-times search-close" id="search-close"></i>
        <div class="search-cell">
          <form method="get">
            <div class="search-field-holder">
              <input
                type="search"
                class="main-search-input"
                placeholder="Search Entire Store..."
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- end fullscreen search -->
  </div>
</template>
<script>
import ShopContent from "../../components/shop/index";
import ProductCard from "../../components/product/ProductCard";
export default {
  components: {
    ShopContent,
    ProductCard,
  },
  data() {
    return {
      search: "",
      min: -50,
      max: 90,
      range: [-20, 70],
      page: 1,
      ex4: "",
      checkbox: "",
    };
  },
  created() {},
  computed: {},
  methods: {
    AddToCart(id) {
      console.log(id)
    },
    showProductDetail(id) {
      this.$router.push({
        name: "productDetail",
        params: {
          id: 1
        }
      })
    }
  },
  props: {},
};
</script>


<style scoped>
.v-input__slot {
  align-items: center;
  justify-content: center;
}

.form-check-input {
  cursor: pointer;
}
</style>
