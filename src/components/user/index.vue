<template>
  <div class="container w-75">
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
    <br />
    <br />
    <v-divider></v-divider>
    <!-- <v-container class="lighten-5">
      <v-row no-gutters class="justify-content-around">
        <v-col cols="4" md="2">
          <v-card class="mx-auto" max-width="500">
            <v-list>
              <v-list-item-group v-model="model">
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="8">
          <v-card class="pa-2" outlined tile>
            .col-12 .col-sm-6 .col-md-8
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->
    <!-- <v-card> -->
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
        <v-list-item>
          <v-icon left>mdi-cog-outline</v-icon> settings
        </v-list-item>
      </v-tab>
      <v-tab-item>
        <shopTable />
      </v-tab-item>
      <v-tab-item>
        <UserCartTable />
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis.
              Nam eget dui. Proin viverra, ligula sit amet ultrices semper,
              ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In
              dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>

            <p class="mb-0">
              Cras sagittis. Phasellus nec sem in justo pellentesque facilisis.
              Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec
              quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam
              at tortor in tellus interdum sagittis.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
    <!-- </v-card> -->
  </div>
</template>
   
    
    <!-- </v-card> -->
<!--  </div>
</template> -->
<script>
import ShopTable from "@/components/user/UserShopListTable";
import UserCartTable from "@/components/user/UserCartTable";
export default {
  components: {
    ShopTable,
    UserCartTable,
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