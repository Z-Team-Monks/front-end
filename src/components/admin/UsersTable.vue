<template>
  <div class="">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-5 col-lg-12">
          <div class="area-title mb-50">
            <h2>Zembil Users</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto">
      <v-data-table :headers="headers" :items="desserts" class="elevation-1">
        <template v-slot:item.glutenfree="{ item }">
          <v-btn sm class="ml-2" color="error"> Delete </v-btn>
        </template>
      </v-data-table>
    </div>
  </div>
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
};
</script>