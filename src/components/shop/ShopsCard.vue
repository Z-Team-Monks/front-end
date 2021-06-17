<template>
  <div v-if="shop && shop.isVisible" class="row height">
    <div class="col-xl-5">
      <div class="product-top">
        <div class="product-img rounded">
          <router-link :to="{ name: 'shop', params: { id: shop.shopId } }">
            <img
              :src="
                shop.imageUrl
                  ? shop.imageUrl
                  : 'https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80'
              "
              alt=""
            />
            <img
              class="secondary-img"
              src="../../assets/img/product/pro14.jpg"
              alt=""
            />
          </router-link>
        </div>
      </div>
    </div>
    <div class="col-xl-7 my-auto">
      <div class="product-content pro-list-content pr-0">
        <h4>
          <router-link :to="{ name: 'shop', params: { id: shop.shopId } }">{{
            shop.name
          }}</router-link>
        </h4>
        <p>
          Follower: {{ shop.followers.length }}
          <br />
          {{ shop.description }}
        </p>
        <div class="product-action">
          <!-- <a @click="showShopDetails" title="Quick View">
            <i class="flaticon-eye"></i>
          </a> -->

          <!-- <span v-if="isAuthenticated">
            <a
              v-if="!isFollowed"
              @click="unFollow()"
              title="Wishlist"  
              class="text-center"
              ><i
                class="fas fa-thumbs-down"
              ></i
            ></a>
            <a
              v-else
              @click="followShop()"
              title="Wishlist"
              class="text-center"
              >
              <i
                class="fas fa-thumbs-up"
              ></i
            ></a>
          </span> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {
    isAuthenticated() {
      return this.$store.state.auth.isAuthenticated;
    },
    isFollowed() {
      let d = this.shop.followers.filter((e) => {
          return  e.userId === JSON.parse(localStorage.getItem("user")).userId
        });
      console.log("is the some ");
      // return ans.length == 0;
      return d.length == 0;
    },
  },
  methods: {
    showShopDetails(e) {
      e.preventDefault();
      console.log("show details");
    },
    unFollow(id) {
      this.$emit("unfollow")
    },

    followShop(from) {
      this.$emit("followShop");
      console.log("show details");
    },
  },
  props: {
    shop: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style scoped>
.product-img {
  height: 200px;
}
</style>