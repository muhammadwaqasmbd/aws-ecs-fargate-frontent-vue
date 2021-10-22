<template>
  <v-app app id="page2">
     <v-layout row justify-center>
      <navbar />
      <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
              <h1 class="display-1">Welcome to Page 2</h1>
              <v-btn color="primary" @click="cacheMessage()">Cache Request for External API Call</v-btn>
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
  name: "page2",
  components: {
   navbar, 
  },
  methods: {
    cacheMessage () {
      const url = process.env.ROOT_API+`/api/cache_request/`;
      const token = localStorage.getItem("token")
      return axios.get(url).then((response) => {
        alert(response.data)
      })
    }
  }
};
</script>


