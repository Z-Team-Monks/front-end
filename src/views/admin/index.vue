<template>
  <section class="product-area box-90 pt-70 pb-40">
    <div class="text-center">
      <Banner />
    </div>
    <v-divider></v-divider>

    <v-toolbar >
      <v-tabs v-model="tab"  background-color="red lighten-4" grow>
        <v-tab href="#ads"> Ads </v-tab>
        <v-tab href="#admin"> Admins </v-tab>
        <v-tab href="#users"> Users </v-tab>
        <v-tab href="#products"> Products </v-tab>
        <v-tab href="#shopTable"> Shop Admission Request </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-divider class=""></v-divider>

    <v-tabs-items v-model="tab">
      <v-tab-item :key="1" value="shopTable">
        <ShopListTable />
      </v-tab-item>
      <v-tab-item :key="2" value="users">
        <UsersTable />
      </v-tab-item>
      <v-tab-item :key="3" value="products">
        <ProductsTable />
      </v-tab-item>
      <v-tab-item :key="4" value="ads">
        <Ads />
      </v-tab-item>
      <v-tab-item :key="5" value="admin">
        <AdminTable />
      </v-tab-item>
    </v-tabs-items>
    <!-- <ShopListTable /> -->
    <!-- </div> -->
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
    Ads
  },
  data() {
    return {
      tab: "shopTable",
    };
  },
  created() {},
  computed: {},
  methods: {},
  props: {},
};
</script>