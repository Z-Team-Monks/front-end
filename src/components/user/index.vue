<template>
  <div class="mx-auto w-75">
    <v-card class="mx-auto">
      <v-btn absolute bottom color="pink" right fab>
        <v-icon dark> mdi-cloud-upload </v-icon>
      </v-btn>
      <v-img
        height="200"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      ></v-img>
      <v-row style="margin: 2.5%; position: absolute; top: 130px">
        <v-list-item>
          <v-list-item-avatar size="100">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="John"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title" style="margin-top: 20px"
              >Nabek Abebe (Niko)</v-list-item-title
            >
            <v-list-item-subtitle
              >Software Engineer | Dancer</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-row>
    </v-card>
    <br />
    <br />
    <br />
    <v-divider></v-divider>
    <v-tabs vertical>
      <v-tab class="justify-center">
        <v-list-item> <v-icon left> mdi-basket </v-icon>Shops </v-list-item>
      </v-tab>
      <v-tab class="text-left">
        <v-list-item> <v-icon left> mdi-star </v-icon> Cart </v-list-item>
      </v-tab>
      <v-tab class="text-left">
        <v-list-item>
          <v-icon left> mdi-oil-lamp</v-icon> Whishlist
        </v-list-item>
      </v-tab>
      <v-tab class="text-left">
        <v-list-item> <v-icon left>mdi-google-ads </v-icon> Ads </v-list-item>
      </v-tab>
      <v-tab class="text-left">
        <v-list-item>
          <v-icon left>mdi-cog-outline</v-icon> settings
        </v-list-item>
      </v-tab>
      <v-tab-item>
        <ShopTable />
      </v-tab-item>
      <v-tab-item>
        <UserCartTable />
      </v-tab-item>
      <v-tab-item>
        <UserWishListTable />
      </v-tab-item>
      <v-tab-item>
        <UserAdsTable />
      </v-tab-item>
      <v-tab-item>
        <UserSettings />
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<script>
import ShopTable from "@/components/user/UserShopListTable";
import UserCartTable from "@/components/user/UserCartTable";
import UserWishListTable from "@/components/user/UserWishListTable";
import UserAdsTable from "@/components/user/UserAdsTable";
import UserSettings from "@/components/user/UserSettings";
export default {
  components: {
    ShopTable,
    UserCartTable,
    UserWishListTable,
    UserAdsTable,
    UserSettings,
  },
  data() {
    return {
      tab: "1",
      items: [
        {
          icon: "mdi-basket",
          text: "Shops",
        },
        {
          icon: "mdi-star",
          text: "Cart",
        },
        {
          icon: "mdi-oil-lamp ",
          text: "Whishlist",
        },
        {
          icon: "mdi-cog-outline",
          text: "settings",
        },
      ],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      model: 1,
    };
  },
  created() {},
  computed: {},
  methods: {},
  props: {},
};
</script>