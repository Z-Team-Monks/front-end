<template>
  <div class="">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-5 col-lg-12">
          <div class="area-title mb-50">
            <h2>Shop Application</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto">
      <v-data-table :headers="headers" :items="desserts" class="elevation-1">
        <template v-slot:item.glutenfree="{ item }">

          <v-btn small elevation="0" class="ml-2" color="error"> Delete Product </v-btn>
        </template>
      </v-data-table>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      desserts: [
        {
          name: "Shemsu tele center",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          iron: "1%",
          glutenfree: true,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          iron: "1%",
          glutenfree: false,
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          iron: "7%",
          glutenfree: false,
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          iron: "0%",
          glutenfree: true,
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          iron: "2%",
          glutenfree: true,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          iron: "6%",
          glutenfree: false,
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
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Iron (%)", value: "iron" },
        { text: "Gluten-Free", value: "glutenfree" },
      ],
    };
  },
};
</script>