<template>
  <div class="pro-item mr-2" v-if="product.isVisible">
    <div class="product-wrapper mb-50">
      <div class="product-img mb-25">
        <a @click="emitProductDetail" href="#">
          <img
            style="object-fit: cover"
            :src="
              product.imageUrl != null
                ? product.imageUrl
                : 'https://images.unsplash.com/photo-1473187983305-f615310e7daa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            "
            alt=""
          />
          <!-- <img
            class="secondary-img"
            :src="GetImageUrl(product.imageUrl)"
            alt=""
          /> -->
        </a>
        <div class="product-action text-center">
          <a
            v-if="isAuthenticated"
            @click="emitAddToCart"
            href=""
            title="Shoppingb Cart"
          >
            <i class="flaticon-shopping-cart"></i>
          </a>
          <a @click="emitProductDetail" href="" title="Quick View">
            <i class="flaticon-eye"></i>
          </a>
        </div>
        <div class="sale-tag">
          <span
            v-if="
              new String(product.condition).valueOf() ==
              new String('New').valueOf()
            "
            class="new"
            >new</span
          >
        </div>
      </div>
      <div class="product-content">
        <div class="pro-cat mb-10">
          <a @click="preventMe"> {{ product.brand }} </a>
        </div>
        <h4>
          <a class="text-dark w-100" href="product-details.html">{{
            product.productName
          }}</a>
        </h4>
        <div class="product-meta">
          <div class="pro-price">
            <span>{{ product.price }} ETB</span>
            <span class="old-price">150 ETB</span>
          </div>
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
    url() {
      return localStorage.getItem("url");
    },
  },
  methods: {
    emitProductLike() {
      console.log("emitproductlike");
      this.$emit("emitProductLike", this.product.productId);
    },
    emitAddToCart(e) {
      e.preventDefault();
      console.log("emitaddtocart");
      this.$emit("emitAddToCart", this.product.productId);
    },
    emitProductDetail(e) {
      console.log("productDetail");
      e.preventDefault();
      this.$emit("emitProductDetail", this.product.productId);
    },
    preventMe(e) {
      e.preventDefault();
    },

    GetImageUrl(img) {
      const da = "../../assets/img/product/pro3.jpg";
      console.log(this.url + img);
      // if(img){
      // if (img.startsWith("/")) {
      //   return this.url + img;
      // }
      // return img;
      // } else {
      return da;
      // }
    },
  },
  props: {
    product: {
      type: Object,
      required: false,
    },
  },
};
</script>