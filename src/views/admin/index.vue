<template>
  <section class="product-area box-90 pt-70 pb-40">
    <!-- <h1 class="d-none">{{stat}}</h1> -->
    <h1 class="d-none">{{stat}}</h1>
    <v-row v-if="stat">
      <v-col cols="12" sm="6" lg="3">
        <base-material-stats-card
          color="primary"
          icon="mdi-account"
          title="Users"
          :value ="`${stat.users}`"
          sub-icon="mdi-account"
          sub-text="Since 2021 May"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <base-material-stats-card
          color="success"
          icon="mdi-store"
          title="Shops"
          :value="`${stat.shops}`"
          sub-icon="mdi-calendar"
          sub-text="Since 2021 May"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <base-material-stats-card
          color="red lighten--4"
          icon="mdi-cart"
          title="Products"
          :value="`${stat.products}`"
          sub-icon="mdi-cart"
          sub-text="Since 2019"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <base-material-stats-card
          color="orange"
          icon="mdi-google-ads"
          title="Ads"
          :value="`${stat.ads}`"
          sub-icon="mdi-google-ads"
          sub-icon-color="red"
          sub-text="Since 2021 May"
        />
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-toolbar>
      <v-tabs v-model="tab" background-color="red lighten-4" grow>
        <v-tab href="#ads"> Ads </v-tab>
        <v-tab href="#users"> Users </v-tab>
        <v-tab href="#products"> Products </v-tab>
        <v-tab href="#shopTable"> Shop Admission Request </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="tab">
      <v-tab-item :key="1" value="ads">
        <Ads />
      </v-tab-item>
      <v-tab-item :key="3" value="users">
        <UsersTable />
      </v-tab-item>
      <v-tab-item :key="4" value="products">
        <ProductsTable />
      </v-tab-item>
      <v-tab-item :key="5" value="shopTable">
        <ShopListTable />
      </v-tab-item>
    </v-tabs-items>
    <v-container id="regular-tables" fluid tag="section"> </v-container>
  </section>
</template>
<script>
import ShopListTable from "@/components/admin/ShopListTable";
import AdminTable from "@/components/admin/AdminTable";
import ProductsTable from "@/components/admin/ProductsTable";
import UsersTable from "@/components/admin/UsersTable";
import Ads from "@/components/admin/AdsTable";
import Banner from "@/components/admin/Banner";
export default {
  components: {
    ShopListTable,
    Banner,
    UsersTable,
    ProductsTable,
    AdminTable,
    Ads,
    ShopListTable,
  },
  data() {
    return {
      tab: "shopTable",
    };
  },
  created() {
    this.$store.dispatch("admin/getStats")
  },
  computed: {

    stat() {
      return this.$store.state.admin.stat;
    }
  },
  methods: {},
  props: {},
};
</script>