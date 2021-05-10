<template>
  <v-app>
    <v-app-bar app color="light" dark>
     <h1>Home Page</h1>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
