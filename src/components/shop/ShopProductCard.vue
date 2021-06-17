<template>
  <div v-if="product.isVisible">
    <v-card class="mx-auto mb-12" max-width="300">
      <v-img
        height="150"
        :src="product.imageUrl ? product.imageUrl : 'https://images.unsplash.com/photo-1551201602-3f9456f0fbf8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' "
      ></v-img>

      <v-card-title>{{ product.productName }}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="red"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">4.5 (413)</div>
          <v-btn
            small
            elevation="0"
            color="transparent"
            @click="SubmitReview"
            fab
          >
            <v-icon class=""> mdi-pen </v-icon>
          </v-btn>
        </v-row>

        <div class="my-4 subtitle-1">
          {{product.price}} ETB •
          <span
            class="text-decoration-line-through text--disabledtext text-caption"
            >110 ETB</span
          >
        </div>

        <div style="height: 60px">
          {{ product.description }}
        </div>
      </v-card-text>
      <v-btn
        @click="emitProductDetail"
        class="ml-5"
        color="red lighten--4"
        dark
        fab
        absolute
        right
        botto
      >
        <v-icon>mdi-eye</v-icon>
      </v-btn>

      <v-divider class="mx-4"></v-divider>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {
    
  },
  methods: {
    emitProductDetail(e) {
      console.log("emitted product detail");
      this.$emit("showProductDetail");
    },
    SubmitReview(e) {
      console.log("emitted");
      this.$emit("productReview");
    },
  },
  props: ["product"],
};
</script>

<style scoped>
.sm__price_text {
  font-size: 0.1rem;
}
</style>