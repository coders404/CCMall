<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$store.dispatch("getSubnavList");
  },
};
</script>

<style lang="less">
.container {
  width: 1200px;
  margin: 0 auto;
}
</style>
