<template>
  <v-col cols="12" class="mt-50">
    <base-material-card color="warning" class="px-5 py-3">
      <template v-slot:heading>
        <div class="display-2 font-weight-light">All Products</div>
      </template>
      <v-card-text>
        <v-data-table :headers="headers" :items="products">
          <template v-slot:item.actions="{ item }">
            <v-btn small elevation="0" @click = "deleteProduct(item.id)"  class="ml-2" color="error">
              Delete Product
              <v-icon small right>mdi-delete</v-icon>
            </v-btn>
          </template>
          <template v-slot:item.discount="{ item }">
              {{item.discount}} %
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
    this.$store.dispatch("admin/GetAllProducts");
  },
  computed: {
    products() {
      return this.$store.state.admin.AProducts;
    },
  },
  data() {
    return {
      headers: [
        {
          text: "Product Name",
          align: "start",
          sortable: true,
          value: "productName",
        },
        { text: "Price", value: "price", sortable: true },
        { text: "Discount", value: "discount", sortable: true },
        // { text: "Actions", value: "actions", sortable: false },
      ],
      // desserts:
    };
  },
  methods: {
    deleteProduct(id) {
      // this.$store.dispatch("products/DeleteProduct", id)
    }
  }
};
</script>