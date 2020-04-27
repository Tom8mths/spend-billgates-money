<template>
  <div class="container">
    <section>
      <div class="title">
        <h1>Your Shopping Spree</h1>
      </div>
      <div class="cart">
        <div class="cart__item">
          <img src="@/assets/images/bigmac.jpg" />
          <h3 class="cart__item_name">Big Mac</h3>
          <h3 class="cart__item_quantity">x 1</h3>
        </div>

        <div class="cart__item">
          <img src="@/assets/images/bigmac.jpg" />
          <h3 class="cart__item_name">Big Mac</h3>
          <h3 class="cart__item_quantity">x 1</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";

section {
  background-color: $white;
  width: 100%;
  height: 260px;

  .title {
    display: block;
    text-align: center;
    padding: 15px;
    margin: 0 auto;
    h1 {
      display: block;
      color: $primary;
      font-size: 28px;
      margin-top: 25px;
      font-weight: 900;
    }
  }
  .cart {
    display: inline-grid;
    grid-template-columns: auto auto;
    justify-items: center;
    align-items: center;
    grid-gap: 3px;
    grid-template-rows: 100px 100px 100px;
    width: 100%;
    padding: 15px;
    margin: 0 auto;

    &__item {
      width: 100%;
      height: auto;
      display: inline-block;
      img {
        height: auto;
        width: 15%;
      }
      &_name {
        font-size: 16px;
        font-weight: 400;
      }
      &_quantity {
        font-size: 16px;
        font-weight: 900;
      }
    }
  }
}
</style>
