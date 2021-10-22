<template>
  <v-app app id="page1">
     <v-layout row justify-center>
      <navbar />
      <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
              <h1 class="display-1">Welcome to Page 1</h1>
              <v-btn color="primary" @click="privateMessage()">Private API Call</v-btn>
            </v-layout>
          </v-slide-y-transition>
        </v-container>
      </v-layout>
  </v-app>
</template>
<script>
import navbar from './navbar';
import axios from "axios";

export default {
  name: "page1",
  components: {
   navbar, 
  },
  methods: {
    privateMessage () {
      const url = process.env.ROOT_API+`/api/private/`;
      const token = localStorage.getItem("token")
      return axios.get(url, {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
        alert(response.data)
      })
    }
  }
};
</script>

