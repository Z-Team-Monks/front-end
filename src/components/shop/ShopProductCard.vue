<template>
  <div>
    <v-card class="mx-auto mb-12" max-width="300">
      <v-img
        height="150"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title>Cafe Badilico</v-card-title>

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
        </v-row>

        <div class="my-4 subtitle-1">$45 • <span class="text-decoration-line-through text--disabledtext text-caption  ">$110</span> </div>

        <div style="height:60px;">
          Small plates, salads & sandwiches - an intimate setting with 12 indoor
          seats plus patio seating.
        </div>
      </v-card-text>


      <v-btn class="ml-5" color="red lighten--4" dark fab absolute right botto>
        <v-icon>mdi-cart</v-icon>
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
  computed: {},
  methods: {},
  props: {},
};
</script>

<style scoped>
.sm__price_text {
  font-size: .1rem;
}
</style>