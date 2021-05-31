<template>
  <v-col cols="12" class="mt-50">
    <h1>    {{ ss }}</h1>

    <base-material-card color="warning" class="px-5 py-3">
      <template v-slot:heading>
        <div class="display-2 font-weight-light">Admins</div>
      </template>
      <v-card-text>
        <v-data-table :headers="headers" :items="desserts">
          <template v-slot:item.glutenfree="{ item }">
            <v-btn small elevation="0" class="ml-2" color="error">
              Deactivate <v-icon right>mdi-account</v-icon>
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
      desserts: [
        {
          name: "Shemsu tele center",
          calories: 159,
          fat: 6.0,
          carbs: 24,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          iron: "7%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
        },
      ],
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Gluten-Free", value: "glutenfree" },
      ],
    };
  },

  created() {
    this.$store.dispatch("product/GetProducts");
  },
  computed: {
    ss() {
      console.log(this.$store.state.product.products)
      return this.$store.state.product.products;
    },
  },
};
</script>