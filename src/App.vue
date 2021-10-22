<template>
    <v-app id=”app”>
      <router-view />
    </v-app>
</template>

<script>
export default {
  name: "app",
  // data() {
  //   this.$store.dispatch('login').then(() => this.$router.push('/page1'))
  //       .catch(err => console.log(err))
  // },
};
</script>

