<template>
  <v-col cols="12" class="mt-50">
    <base-material-card color="warning" class="px-5 py-3">
      <template v-slot:heading>
        <div class="display-2 font-weight-light">Ads</div>
      </template>
      <v-card-text>
        <v-data-table
          no-data-text="No current Ads"
          :headers="headers"
          :items="ads"
        >
          <template v-slot:item.actions="{ item }">
            <v-btn
              @click="DeactivateAd(item)"
              v-if="item.is_active"
              small
              elevation="0"
              class="ml-2"
              color="error"
            >
              Deactivate
            </v-btn>
            <v-btn
              v-else
              @click="ActivateAd(item)"
              small
              elevation="0"
              class="ml-2"
              color="primary"
            >
              Activate
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </base-material-card>
  </v-col>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      headers: [
        // { text: "Product Name", value: "name" },
        { text: "Description", value: "description" },
        // { text: "Discount", value: "discount" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },

  created() {
    this.$store.dispatch("shops/Ads");
    // this.$store.dispatch("ads/GetUserAds");
  },

  computed: {
    ads() {
      return this.$store.state.shops.ads;
    },
  },
  methods: {
    DeactivateAd(id) {
      this.$store.dispatch("shops/DeactivateAd", id.id);
      console.log(id.id);
    },
    ActivateAd(id) {
      console.log(id.id);
      this.$store.dispatch("shops/ActivateAd", id.id);
    },
  },
};
</script>