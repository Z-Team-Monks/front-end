<template>
  <div>
    <v-row>
      <v-col cols="4">
        <div class="cart-img">
          <router-link
            :to="{ name: 'shop', params: { id: cartItem.product.shopId } }"
          >
            <img src="../../assets/img/product/pro1.jpg" alt="" />
          </router-link>
        </div>
      </v-col>

      <v-col cols="6">
        <div class="cart-content">
          <h3>
            <router-link
              :to="{ name: 'shop', params: { id: cartItem.product.shopId } }"
              >{{ cartItem.product.productName }}</router-link
            >
          </h3>
          <div class="cart-price">
            <span class="new"> {{ cartItem.product.price }} ETB</span>
            <span> </span>
          </div>
        </div>
      </v-col>
      <v-col cols="2">
        <div class="del-icon">
          <v-btn icon @click="emitDeleteCart">
            <i class="far fa-trash-alt"></i>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {
    emitDeleteCart(e) {
      // pass the id of the cart
      this.$emit("deleteCart", 1);
    },
  },
  props: ["cartItem"],
};
</script>


<style scoped>
a {
  font-size: 1.2rem;
}
</style>