<template>
  <div>
    <header class="border-bottom sticky-top">
      <div id="header-sticky" class="header-area box-90">
        <div class="container-fluid" style="z-index: 10000">
          <div class="row align-items-center" style="z-index: 10000">
            <div
              class="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-5 d-flex align-items-center pos-relative"
            >
              <div class="basic-bar cat-toggle">
                <span class="bar1"></span>
                <span class="bar2"></span>
                <span class="bar3"></span>
              </div>
              <div class="logo">
                <router-link :to="{ name: 'Home' }">
                  <!-- <img src="../../assets/img/logo/logo.png" alt=""/> -->
                </router-link>
              </div>
            </div>
            <div class="col-xl-8 col-lg-6 col-md-8 col-8 d-none d-xl-block">
              <div class="main-menu text-center">
                <nav id="mobile-menu">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li class="mega-menu">
                      <a href="shop.html">Shop</a>
                    </li>

                    <li>
                      <a href="shop-filter.html">Products </a>
                    </li>

                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-5 col-sm-7 pl-0">
              <div class="header-right f-right">
                <ul>
                  <li class="search-btn">
                    <a class="search-btn nav-search search-trigger" href="#"
                      ><i class="fas fa-search"></i
                    ></a>
                  </li>
                  <li class="login-btn">
                    <router-link :to="{ name: 'Auth' }"
                      ><i class="far fa-user"></i
                    ></router-link>
                  </li>
                  <li class="d-shop-cart">
                    <a href="#"
                      ><i class="flaticon-shopping-cart"></i>
                      <span class="cart-count">3</span></a
                    >
                    <ul class="minicart">
                      <li v-for="(item, i) in carts" :key="i">
                        <CartCard @deleteCart="deleteCart" />
                      </li>

                      <li>
                        <div class="total-price">
                          <span class="f-left">Total:</span>
                          <span class="f-right">$300.0</span>
                        </div>
                      </li>
                      <li>
                        <div class="checkout-link">
                          <a href="cart.html">Shopping Cart</a>
                          <a class="red-color" href="checkout.html">Checkout</a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12 d-xl-none">
              <div class="mobile-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import CartCard from "@/components/cart/CartCard";
export default {
  // name: "TheHeader",
  components: {
    CartCard,
  },
  data() {
    return {
      carts: [1, 2, 5],
    };
  },
  created() {},
  computed: {},
  methods: {
    deleteCart(id) {
      // do your deletion in here
      console.log(id);
    },
  },
  props: {},
};
</script>
