<template>
  <v-app>
    <top-navbar/>
    <v-navigation-drawer
      color="primary"
      v-model="drawer"
      :mini-variant="mini"
      mini-variant-width="70"
      :expand-on-hover="expandOnHover"
      :temporary="temporary"
      dark
      app
      mobile-breakpoint="0"
    >
      <v-list dense nav class="py-0">
        <v-list-item>
          <v-list-item-avatar>
            <v-img contain :src="appLogoMini" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-img contain :src="appLogo" />
          </v-list-item-content>
        </v-list-item>

        <v-divider/>

        <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <router-view/>    
  </v-app>  
</template>

<script>
// import { logout } from '@/services/Auth'
import { TopNavbar } from '@/components'
import config from '@/config'

export default {
  components: {
    TopNavbar,
  },
  data() {
    return {
      drawer: null,
      expandOnHover: false,
      temporary: false,
      appLogoMini: `${config.services.staticServer}/LPsolo.png`,
      appLogo: `${config.services.staticServer}/LPsolo.png`,
      items: [
        {
          title: "Home",
          icon: "mdi-home",
          link: "/"
        }
      ],
    };
  },
  computed: {
    mini: function () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          this.drawer = false;
          this.expandOnHover = false;
          this.temporary = true;
          return false;

        case "sm":
          this.drawer = false;
          this.expandOnHover = false;
          this.temporary = true;
          return false;

        case "md":
          this.drawer = true;
          this.expandOnHover = true;
          this.temporary = false;
          return true;

        case "lg":
          this.drawer = true;
          this.expandOnHover = true;
          this.temporary = false;
          return true;

        case "xl":
          this.drawer = true;
          this.expandOnHover = true;
          this.temporary = false;
          return true;
      }
    },
  },
}
</script>
