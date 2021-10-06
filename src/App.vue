<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";

export default {
  components: {
    Footer,
    Header
  },
  watch: {
    $route() {
      console.log("sahifa almashdi");
    }
  }
};
</script>
    Contacts
