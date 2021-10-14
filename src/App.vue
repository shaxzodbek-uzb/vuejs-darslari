<template>
  <div :class="{dark: isDarkMode}">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header/Index";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isDarkMode"])
  },
  components: {
    Footer,
    Header
  }
};
</script>
<style lang="sass">
.dark
  background: #333
  color: white
  .about
    color: black
</style>
