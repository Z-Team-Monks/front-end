<template>
  <div>
    <header class="border-bottom sticky-top">
      <div id="header-sticky" class="header-area box-90">
        <div class="container-fluid" style="z-index: 10000">
          <div class="row align-items-center" style="z-index: 10000">
            <div
              class="
                col-xl-2 col-lg-6 col-md-6 col-7 col-sm-5
                d-flex
                align-items-center
                pos-relative
              "
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
            <div class="col-xl-7 col-lg-6 col-md-8 col-8 d-none d-xl-block">
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
            <div class="col-xl-3 col-lg-7 col-md-7 col-6 col-sm-7 pl-0">
              <div class="header-right f-right">
                <ul>
                  <li class="login-btn">
                    <a href="#" @click="LoginOrToRole"
                      ><i class="far fa-user"></i
                    ></a>
                  </li>
                  <li class="notification-bell d-shop-cart" v-if="showLogout">
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
                  <li class="d-shop-cart" v-if="showLogout">
                    <router-link :to="{ name: 'shops' }" href="#"
                      ><i class="flaticon-shopping-cart"></i>
                      <span class="cart-count">{{
                        carts.length
                      }}</span></router-link
                    >
                    <ul class="minicart">
                      <li v-for="(item, i) in carts" :key="i">
                        <CartCard
                          :cartItem="item"
                          @deleteCart="deleteCart(item.wishListItemId)"
                        />
                      </li>

                      <li v-if="carts.length == 0">
                        <div class="total-price">
                          <span class="">No Items in cart!</span>
                        </div>
                      </li>
                      <!-- <li>
                        <div class="total-price">
                          <span class="f-left">Total:</span>
                          <span class="f-right">$300.0</span>
                        </div>
                      </li> -->
                      <!-- <li>
                        <div class="checkout-link">
                          <a @click="clearCart" class="red-color" href="#"
                            >Clear Cart</a
                          >
                        </div>
                      </li> -->
                    </ul>
                  </li>

                  <li class="login-btn" v-if="showLogout">
                    <a href="#" @click="logMeTheHellOut"
                      ><i class="fas fa-sign-out-alt"></i
                    ></a>
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
    return {};
  },
  created() {
    if (localStorage.getItem("isAuthenticated")) {
      this.$store.dispatch("notification/getNotifications");
    }
    if (this.showLogout) {
      this.$store.dispatch("shops/GetUserCart");
    }
  },
  computed: {
    showLogout() {
      return this.$store.state.auth.isAuthenticated;
    },
    notifications() {
      return this.$store.state.notification.notifications;
    },
    isAuthenticated() {
      return this.$store.state.auth.isAuthenticated;
    },
    carts() {
      return this.$store.state.shops.carts;
    },
    role() {
      return JSON.parse(localStorage.getItem("user")).role;
    },
  },
  methods: {
    deleteCart(id) {
      this.$store.dispatch("shops/DeleteCartItem", id);
    },
    clearNotification() {
      this.$store.dispatch("notification/clearNotifications");
    },
    clearCart(e) {
      e.preventDefault();
    },
    logMeTheHellOut() {
      localStorage.clear();
      this.$store.dispatch("auth/ChangeStatus", false);
      this.LogOut();
      this.$router.push({ name: "Home" }).catch(() => {});
    },
    // clearNotification() {
    //   this.$store.dispatch("notification/clearNotifications");
    // },
    LogOut() {
      this.$store.dispatch("auth/LogOut");
    },
    LoginOrToRole() {
      const role = localStorage.getItem("role");
      // console.log(this.$router.currentRoute);
      if (this.showLogout) {
        if (role == "admin" && this.$router.name != "/admin") {
          this.$router.push({
            name: role,
          });
        } else {
          this.$router.push({
            name: role,
          });
        }
      } else {
        this.$router.push({ name: "Auth" });
      }
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