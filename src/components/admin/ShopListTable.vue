<template>
  <v-col cols="12" class="mt-50">
    <base-material-card color="warning" class="px-5 py-3">

      <template v-slot:heading>
        <div class="display-2 font-weight-light">Shop Admission table</div>
      </template>
      <v-card-text>
        <v-data-table :headers="headers" :items="shops">
          <template v-slot:item.actions="{ item }">
            <v-btn
              v-if="item.status == null"
              small
              @click="Approve(item)"
              elevation="0"
              color="primary"
            >
              Approve
            </v-btn>

            <v-btn
              v-if="item.status == null"
              small
              elevation="0"
              @click="reject(item)"
              class="ml-2"
              color="error"
            >
              Reject
            </v-btn>

            <v-chip small v-else> Approved </v-chip>
          </template>
          <template v-slot:item.link="{ item }">
            <v-icon @click="goToShopPage(item.shopId)">mdi-link-variant</v-icon>
          </template>
        </v-data-table>
      </v-card-text>
    </base-material-card>
  </v-col>
</template>
<script>
export default {
  components: {},
  created() {
    this.$store.dispatch("admin/GetAllShops");
  },
  data() {
    return {
      headers: [
        {
          text: "shop name",
          align: "start",
          sortable: true,
          value: "name",
        },
        { text: "building name", value: "building_name" },
        { text: "actions", value: "actions" },
        { text: "link", value: "link" },
      ],
    };
  },

  computed: {
    shops() {
      return this.$store.state.admin.AShops;
    },
  },
  methods: {
    goToShopPage(id) {
      this.$router.push({ name: "shop", params: { id: id } });
    },
    reject(item) {
      console.log("reject")
      // const data = this.shops.filter((e) => {
        //   return e.shopId == id;
      // });
      // data = data[0]
      // data.status = "Rejected"RejectShop
      this.$store.dispatch("admin/RejectShop", item.shopId);

      // this.$store.dispatch("admin/UpdateShopStatus" , data);
    },

    Approve(item) {
      console.log("approve")
      // const data = this.shops.filter((e) => {
      //   return e.shopId == id;
      // });
      // data = data[0];
      // data.status = "Approved";
      this.$store.dispatch("admin/ApproveShop", item.shopId);
    },
  },
};
</script>