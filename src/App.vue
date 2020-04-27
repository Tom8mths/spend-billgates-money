<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/_variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}
html {
  background-color: $secondary;
}

.container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
