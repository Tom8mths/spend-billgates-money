<template>
  <div class="container">
    <header>
      <div class="wrapper">
        <img src="@/assets/images/billgates.png" alt="" />
        <h1>Spend Bill Gates' Money</h1>
      </div>
    </header>
  </div>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";

header {
  background-color: $white;
  width: 100%;
  height: 260px;
  display: flex;
  justify-content: center;
  .wrapper {
    vertical-align: top;
    display: inline-block;
    text-align: center;
    padding: 30px 20px;
    margin: 0 auto;
    img {
      border-radius: 50%;
    }
    h1 {
      display: block;
      color: $black;
      font-size: 32px;
      margin-top: 25px;
      font-weight: 900;
    }
  }
}
</style>
