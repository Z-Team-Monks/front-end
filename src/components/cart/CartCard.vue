<template>
  <div>
    <div class="cart-img">
      <a href="product-details.html">
        <img src="../../assets/img/product/pro1.jpg" alt="" />
      </a>
    </div>
    <div class="cart-content">
      <h3>
        <a href="product-details.html">Black & White Shoes</a>
      </h3>
      <div class="cart-price">
        <span class="new">$ 229.9</span>
        <span>
          <del>$239.9</del>
        </span>
      </div>
    </div>
    <div class="del-icon">
      <v-btn icon @click="emitDeleteCart">
        <i class="far fa-trash-alt"></i>
      </v-btn>
    </div>
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
          this.$emit("deleteCart" ,1)
      }
  },
  props: {},
};
</script>