<template>
  <div>
    <header class="border-bottom sticky-top">
      <div id="header-sticky" class="header-area box-90">
        <div class="container-fluid" style="z-index: 10000">
          <div class="row align-items-center" style="z-index: 10000">
            <div
              class="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-5 d-flex align-items-center pos-relative"
            >
              <router-link :to="{ name: 'Home' }">
                <div class="basic-bar cat-toggle">
                  <span class="bar1"></span>
                  <span class="bar2"></span>
                  <span class="bar3"></span>
                </div>
              </router-link>
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
                    <li class="mega-menu">
                      <router-link :to="{ name: 'map' }">Near by</router-link>
                    </li>
                    <li class="mega-menu">
                      <router-link :to="{ name: 'shops' }">Shop</router-link>
                    </li>

                    <li>
                      <router-link
                        :to="{ name: 'browse' }"
                        href="shop-filter.html"
                        >Products
                      </router-link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-xl-2 col-lg-6 col-md-6 col-5 col-sm-7 pl-0">
              <div class="header-right f-right">
                <ul>
                  <li class="login-btn">
                    <router-link :to="{ name: 'Auth' }"
                      ><i class="far fa-user"></i
                    ></router-link>
                  </li>
                  <li class="d-shop-cart">
                    <router-link :to="{ name: 'shops' }" href="#"
                      ><i class="flaticon-shopping-cart"></i>
                      <span class="cart-count">3</span></router-link
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
                          <a @click="clearCart" class="red-color" href="#"
                            >Clear Cart</a
                          >
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li class="notification-bell d-shop-cart">
                    <a class="search-btn nav-search search-trigger" href="#">
                      <i class="fa fa-bell" aria-hidden="true"></i
                    ></a>
                    <ul class="minicart">
                      <li>
                        <h4>
                          Notifications -
                          <span>{{ this.notifications.length }}</span>
                        </h4>
                        <input
                          @click="clearNotification()"
                          class="button"
                          type="button"
                          value="Clear"
                        />
                      </li>
                      <li v-for="(notification, i) in notifications" :key="i">
                        <NotificationItem :notification="notification" />
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
import NotificationItem from "../notification/NotificationItem";


export default {
  // name: "TheHeader",
  components: {
    CartCard,
    NotificationItem,
  },
  data() {
    return {
      carts: [1, 2, 5],          
    };
  },
  created() {},
  computed: {
    notifications() {
      return this.$store.state.notification.notifications;
    },
  },
  created() {    
    this.$store.dispatch("notification/getNotifications");    
  },
  methods: {    
    deleteCart(id) {
      // do your deletion in here
      console.log(id);
    },
    clearNotification() {
      this.$store.dispatch("notification/clearNotifications");    
    },
    clearCart(e) {
      e.preventDefault();
    },    
  },
  props: {},
};
</script>


<style scoped>
.button {
  display: inline-block;
  margin: 5px 0px;
  height: 30px;
  min-width: 55px;
  background: #fe5245;
  border: none;
  outline: none;
  color: white;
  font-family: inherit;
  font-weight: 400;
  font-size: 12px;
  border-radius: 3px;
  box-shadow: 0 5px 0px #d56862;
  border-bottom: 2px solid #e47a72;
}

.button:active {
  transform: translateY(4px);
  border-bottom-width: 2px;
  box-shadow: none;
}
</style>