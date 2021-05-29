<template>
  <div>
    <v-row class="">
      <v-col cols="3">
        <v-card class="mx-auto p-4" max-width="300" tile>
          <v-list>
            <div class="overline">Fillter Products</div>
            <v-divider />
            <v-list-item-group color="primary">
              <v-list-item-title>
                <v-list-item-content>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label class="form-check-label" for="defaultCheck1">
                      Default checkbox
                    </label>
                  </div>
                </v-list-item-content>
              </v-list-item-title>
              <v-list-item-title>
                <v-list-item-content>
                  <v-subheader>Price Rage</v-subheader>
                  <v-range-slider max="50" min="-50"></v-range-slider>
                </v-list-item-content>
              </v-list-item-title>
              <v-list-item-title>
                <v-list-item-content>
                  <v-subheader>Rating Rage</v-subheader>
                  <v-range-slider max="50" min="-50"></v-range-slider>
                </v-list-item-content>
              </v-list-item-title>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="9">
        <v-row>
          <v-col>
            <ShopProductCard />
          </v-col>
          <v-col> 
            <ShopProductCard />
          </v-col>
          <v-col>
            <ShopProductCard />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <ShopProductCard />
          </v-col>
          <v-col> 
            <ShopProductCard />
          </v-col>
          <v-col>
            <ShopProductCard />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import ShopProductCard from "@/components/shop/ShopProductCard";
export default {
  components: {
    ShopProductCard,
  },
  data() {
    return {
      selectedItem: 1,
      items: [
        { text: "Real-Time", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi-flag" },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {},
  props: {},
};
</script>

<style scoped>
.v-ripple__container {
  opacity: 0 !important;
}
</style>