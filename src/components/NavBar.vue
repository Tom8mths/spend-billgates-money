<template>
  <nav>
    <div class="container">
      <a href="#">Neal.fun</a>
    </div>
  </nav>
</template>

<script lang="ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";
nav {
  background-color: $white;
  display: flex;
  align-items: center;
  padding: 30px 0;
  margin: 0 0 25px;
  a {
    font-size: 30px;
    color: $black;
    text-decoration: none;
    font-weight: 800;
    margin-left: 10px;
  }
}
</style>
