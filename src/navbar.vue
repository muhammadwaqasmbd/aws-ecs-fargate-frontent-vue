<template>
  <div>
      <v-app-bar app dark color="blue-grey darken-1" class="hidden-xs-and-down">
        <v-toolbar-title>Menu</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
         <v-btn
          key="0"
          title="Page 1"
          to="page1"
         >{{ "Page 1" }}</v-btn>
          <v-btn
          key="1"
          title="Page 2"
          to="page2"
         >{{ "Page 2" }}</v-btn>
         <v-btn
          key="2"
          title="Logout"
          @click="logout()"
         >{{ "Logout" }}</v-btn>
        </v-toolbar-items>
      </v-app-bar>
  </div>
</template>

<script>
import AuthService from "./auth/AuthService";
const auth = new AuthService();
export default {
  name: "navbar",
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/');
        }).catch(err => console.log(err))
    },
  }
};
</script>

