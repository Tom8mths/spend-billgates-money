<template>
  <div class="container">
    <div class="money-nav fixed">
      $90,000,000,000 left
    </div>
  </div>
</template>

<script lang="ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";

.money-nav {
  background-color: $primary;
  color: $white;
  width: 100%;
  margin: 10px 0;
  padding: 20px;
  font-size: 32px;
  font-weight: 900;
  text-align: center;
}
</style>
