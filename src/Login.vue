<template>
<v-app id="inspire">
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Login with Auth0</v-toolbar-title>
                     </v-toolbar>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="login()">Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>

</template>

<script>
import AuthService from "./auth/AuthService";

const auth = new AuthService();
export default {
  name: "app",
  methods: {
    login() {
      auth.login().then(res=>{
       this.$store.dispatch('login').then((res) =>{console.log(res)})
		   		.catch(err => console.log(err))
      }).catch(e=>{
        console.log(e)
      })
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>






