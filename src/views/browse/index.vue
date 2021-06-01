<template>
  <div>
    <section class="shop-area pb-100">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 col-lg-8">
            <!-- tab filter -->
            <div class="row ">
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
                <!-- <div class="pro-filter mb-40 f-right">
                  <form action="#">
                    <select name="pro-filter" id="pro-filter">
                      <option value="1">Shop By</option>
                      <option value="2">Top Sales</option>
                      <option value="3">New Product</option>
                      <option value="4">A to Z Product</option>
                    </select>
                  </form>
                </div> -->
              </div>
            </div>
            <!-- tab content -->
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="row">
                  <div class="col-xl-4 col-lg-6 col-md-6">
                    <ProductCard @emitProductDetail="showDetailModal" />
                  </div>
                  <div class="col-xl-4 col-lg-6 col-md-6">
                    <ProductCard @emitProductDetail="showDetailModal"/>
                  </div>
                  <div class="col-xl-4 col-lg-6 col-md-6">
                    <ProductCard @emitProductDetail="showDetailModal" />
                  </div>
                  <div class="col-xl-4 col-lg-6 col-md-6">
                    <ProductCard @emitProductDetail="showDetailModal" />
                  </div>
                  <div class="col-xl-4 col-lg-6 col-md-6">
                    <ProductCard @emitProductDetail="showDetailModal" />
                  </div>
                  <div class="col-xl-4 col-lg-6 col-md-6">
                    <ProductCard @emitProductDetail="showDetailModal" />
                  </div>
                  <div class="col-xl-4 col-lg-6 col-md-6">
                    <ProductCard @emitProductDetail="showDetailModal"/>
                  </div>
                
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div class="row">
                  <div class="col-xl-4">
                    <div class="product-wrapper mb-30">
                      <div class="product-img">
                        <a href="product-details.html">
                          <img
                            src="../../assets/img/product/pro13.jpg"
                            alt=""
                          />
                          <img
                            class="secondary-img"
                            src="../../assets/img/product/pro14.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-8">
                    <div class="product-content pro-list-content pr-0 mb-50">
                      <div class="pro-cat mb-10">
                        <a href="shop.html">decor, </a>
                        <a href="shop.html">furniture</a>
                      </div>
                      <h4>
                        <a href="product-details.html"
                          >Minimal Troma Furniture</a
                        >
                      </h4>
                      <div class="product-meta mb-10">
                        <div class="pro-price">
                          <span>$119.00 USD</span>
                          <span class="old-price">$230.00 USD</span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                      <div class="product-action">
                        <a href="#" title="Shoppingb Cart">
                          <i class="flaticon-shopping-cart"></i>
                        </a>
                        <a href="#" title="Quick View">
                          <i class="flaticon-eye"></i>
                        </a>
                        <a href="#" title="Wishlist"
                          ><i class="flaticon-like"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-4">
                    <div class="product-wrapper mb-30">
                      <div class="product-img">
                        <a href="product-details.html">
                          <img
                            src="../../assets/img/product/pro11.jpg"
                            alt=""
                          />
                          <img
                            class="secondary-img"
                            src="../../assets/img/product/pro12.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-8">
                    <div class="product-content pro-list-content pr-0 mb-50">
                      <div class="pro-cat mb-10">
                        <a href="shop.html">decor, </a>
                        <a href="shop.html">furniture</a>
                      </div>
                      <h4>
                        <a href="product-details.html"
                          >Minimal Troma Furniture</a
                        >
                      </h4>
                      <div class="product-meta mb-10">
                        <div class="pro-price">
                          <span>$119.00 USD</span>
                          <span class="old-price">$230.00 USD</span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                      <div class="product-action">
                        <a href="#" title="Shoppingb Cart">
                          <i class="flaticon-shopping-cart"></i>
                        </a>
                        <a href="#" title="Quick View">
                          <i class="flaticon-eye"></i>
                        </a>
                        <a href="#" title="Wishlist"
                          ><i class="flaticon-like"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-4">
                    <div class="product-wrapper mb-30">
                      <div class="product-img">
                        <a href="product-details.html">
                          <img
                            src="../../assets/img/product/pro15.jpg"
                            alt=""
                          />
                          <img
                            class="secondary-img"
                            src="../../assets/img/product/pro16.jpg"
                            alt=""
                          />
                        </a>
                        <div class="sale-tag">
                          <span class="new">new</span>
                          <span class="sale">sale</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-8">
                    <div class="product-content pro-list-content pr-0 mb-50">
                      <div class="pro-cat mb-10">
                        <a href="shop.html">decor, </a>
                        <a href="shop.html">furniture</a>
                      </div>
                      <h4>
                        <a href="product-details.html"
                          >Minimal Troma Furniture</a
                        >
                      </h4>
                      <div class="product-meta mb-10">
                        <div class="pro-price">
                          <span>$119.00 USD</span>
                          <span class="old-price">$230.00 USD</span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                      <div class="product-action">
                        <a href="#" title="Shoppingb Cart">
                          <i class="flaticon-shopping-cart"></i>
                        </a>
                        <a href="#" title="Quick View">
                          <i class="flaticon-eye"></i>
                        </a>
                        <a href="#" title="Wishlist"
                          ><i class="flaticon-like"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-4">
                    <div class="product-wrapper mb-30">
                      <div class="product-img">
                        <a href="product-details.html">
                          <img src="../../assets/img/product/pro6.jpg" alt="" />
                          <img
                            class="secondary-img"
                            src="../../assets/img/product/pro7.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-8">
                    <div class="product-content pro-list-content pr-0 mb-50">
                      <div class="pro-cat mb-10">
                        <a href="shop.html">decor, </a>
                        <a href="shop.html">furniture</a>
                      </div>
                      <h4>
                        <a href="product-details.html"
                          >Minimal Troma Furniture</a
                        >
                      </h4>
                      <div class="product-meta mb-10">
                        <div class="pro-price">
                          <span>$119.00 USD</span>
                          <span class="old-price">$230.00 USD</span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                      <div class="product-action">
                        <a href="#" title="Shoppingb Cart">
                          <i class="flaticon-shopping-cart"></i>
                        </a>
                        <a href="#" title="Quick View">
                          <i class="flaticon-eye"></i>
                        </a>
                        <a href="#" title="Wishlist"
                          ><i class="flaticon-like"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-4">
                    <div class="product-wrapper mb-30">
                      <div class="product-img">
                        <a href="product-details.html">
                          <img
                            src="../../assets/img/product/pro18.jpg"
                            alt=""
                          />
                          <img
                            class="secondary-img"
                            src="../../assets/img/product/pro19.jpg"
                            alt=""
                          />
                        </a>
                        <div class="sale-tag">
                          <span class="new">new</span>
                          <span class="sale">sale</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-8">
                    <div class="product-content pro-list-content pr-0 mb-50">
                      <div class="pro-cat mb-10">
                        <a href="shop.html">decor, </a>
                        <a href="shop.html">furniture</a>
                      </div>
                      <h4>
                        <a href="product-details.html"
                          >Minimal Troma Furniture</a
                        >
                      </h4>
                      <div class="product-meta mb-10">
                        <div class="pro-price">
                          <span>$119.00 USD</span>
                          <span class="old-price">$230.00 USD</span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                      <div class="product-action">
                        <a href="#" title="Shoppingb Cart">
                          <i class="flaticon-shopping-cart"></i>
                        </a>
                        <a href="#" title="Quick View">
                          <i class="flaticon-eye"></i>
                        </a>
                        <a href="#" title="Wishlist"
                          ><i class="flaticon-like"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-4">
                    <div class="product-wrapper mb-30">
                      <div class="product-img mb-25">
                        <a href="product-details.html">
                          <img src="../../assets/img/product/pro5.jpg" alt="" />
                          <img
                            class="secondary-img"
                            src="../../assets/img/product/pro6.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-8">
                    <div class="product-content pro-list-content pr-0 mb-50">
                      <div class="pro-cat mb-10">
                        <a href="shop.html">decor, </a>
                        <a href="shop.html">furniture</a>
                      </div>
                      <h4>
                        <a href="product-details.html"
                          >Minimal Troma Furniture</a
                        >
                      </h4>
                      <div class="product-meta mb-10">
                        <div class="pro-price">
                          <span>$119.00 USD</span>
                          <span class="old-price">$230.00 USD</span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                      <div class="product-action">
                        <a href="#" title="Shoppingb Cart">
                          <i class="flaticon-shopping-cart"></i>
                        </a>
                        <a href="#" title="Quick View">
                          <i class="flaticon-eye"></i>
                        </a>
                        <a href="#" title="Wishlist"
                          ><i class="flaticon-like"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="basic-pagination basic-pagination-2 text-center mt-20">
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
                <h3 class="shop-title">Search Product</h3>
                <form @submit.prevent="searchMe" class="shop-search">
                  <input type="text" v-model="searchQuery" placeholder="Your keyword...." />
                  <button><i class="fa fa-search"></i></button>
                </form>
              </div>

              <div class="shop-widget">
                <h3 class="shop-title">Tags</h3>
                <ul class="shop-tag">
                  <v-chip-group v-model="neighborhoods" column multiple>
                    <v-chip filter outlined> Electronics </v-chip>
                    <v-chip filter outlined> Mobile Phone </v-chip>
                    <v-chip filter outlined> Men Clothing </v-chip>
                    <v-chip filter outlined> Furniture </v-chip>
                  </v-chip-group>
                </ul>
              </div>

              <div class="shop-widget">
                <h3 class="shop-title">Price Range</h3>
                <div class="price-filter">
                  <v-range-slider step="10"></v-range-slider>
                </div>
              </div>

              <div class="shop-widget">
                <h3 class="shop-title">Catergories</h3>
                
                <ul class="shop-link">
                  <li><input type="checkbox" name="" id="" /> Accessories</li>
                  <li><input type="checkbox" name="" id="" /> Bags</li>
                  <li><input type="checkbox" name="" id="" /> Clothing</li>
                  <li><input type="checkbox" name="" id="" /> Shoes</li>
                  <li><input type="checkbox" name="" id="" /> Exclusive</li>
                  <li><input type="checkbox" name="" id="" /> Uncategorized</li>
                  <li><input type="checkbox" name="" id="" /> Women</li>
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




      <v-dialog :scrollable = "true" v-model="dialog" max-width="900">
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
                src="https://picsum.photos/id/11/500/300"
              ></v-img>
            </v-col>
            <!-- <v-col cols="1" /> -->
            <v-col cols="6">
              <div class="details-cat mb-20">
                <a href="#">decor,</a>
                <a href="#">furniture</a>
              </div>
              <h2 class="pro-details-title">Limonda Women</h2>
              <div class="details-price mb-20">
                <span>$119.00</span>
                <span class="old-price">$246.00</span>
              </div>

              <div class="product-desc variant-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </p>
              </div>
              <v-row>
                <v-col>
                  <v-btn
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
        </v-card>
      </v-dialog>
  </div>
</template>
<script>
import ProductCard from "@/components/product/ProductCard"
export default {
    components: { 
        ProductCard
    },
  data() {
    return {
      neighborhoods: [],
      searchQuery: "",
      dialog : false
    };
  },
  created() {},
  computed: {},
  methods: {
      searchMe(e) {
          console.log(this.searchQuery);
    }
,
    showDetailModal(e) {
      this.dialog = true;
    }
  },
  props: {},
};
</script>