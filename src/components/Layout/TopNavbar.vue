<template>
  <v-app-bar color="secondary" dark app>
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      v-on:click="$parent.$parent.drawer = !$parent.$parent.drawer"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>{{$route.name}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- <v-avatar :size="50">
      <img :src="`${photo}`" alt="User Image" />
    </v-avatar>

    <strong class="hidden-xs-only">&nbsp{{ name }}&nbsp</strong>

    <v-btn text x-small color="white" @click="handleLogout()">
      cerrar sesión
      <v-icon small right dark>mdi-logout</v-icon>
    </v-btn> -->
  </v-app-bar>
</template>

<script>
// import { logout } from "@/services/Auth";
// import photoService from "@/services/PhotoService/photoService";
// import { getUserName } from "@/services/Auth";

export default {
  name: "top-navbar",
  data() {
    return {
      getEmployees: [],
      photo: null,
      name: null
    };
  },
  mounted() {
    // this.getUserProfile();
  },
  methods: {
    handleLogout() {
      logout();
    },
    async getUserProfile() {
      this.getEmployees = await getUserName();
      this.photo = await photoService.getPhoto(this.getEmployees[0].foto);
      this.name = this.getEmployees[0].name;
    }
  }
};
</script>