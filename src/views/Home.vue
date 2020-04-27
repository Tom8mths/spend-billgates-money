<template>
  <div class="home">
    <Header />
    <Money />
    <div class="container">
      <div class="container__items">
        <div v-for="item in items" class="container__items_item" :key="item.id">
          <Item
            :id="item.id"
            :name="item.name"
            :price="item.price"
            :image="item.image"
            :quantity="item.quantity"
          />
        </div>
      </div>
    </div>
    <Cart />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Money from "@/components/Money.vue";
import Item from "@/components/Item.vue";
import Cart from "@/components/Cart.vue";

export default {
  name: "Home",
  computed: {
    items() {
      return this.$store.state.items;
    }
  },
  components: {
    Header,
    Money,
    Item,
    Cart
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/_variables.scss";
@import "@/assets/sass/_buttons.scss";

.container__items {
  width: auto;
  height: auto;

  display: grid;
  grid-template-columns: 33.3% 33.33% 33.33%;
  &_item {
    display: inline-block;
    text-align: center;
    background-color: $white;
    margin-bottom: 10px;
    margin-right: 10px;
    img {
      padding: 15px 10px 10px;
    }
    h3 {
      font-size: 22px;
      color: $black;
    }
    h4 {
      color: $primary;
      font-size: 20px;
    }
    .actions {
      padding: 9px 0;
      margin: 25px 0 0;
      white-space: nowrap;
      input {
        max-width: 100px;
        text-align: center;
        border-radius: 3px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(178, 190, 195);
        border-image: initial;
        padding: 9px 12px;
        font-size: 16px;
        font-family: Arial, Helvetica, sans-serif !important;
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        /* Firefox */
        &[type="number"] {
          -moz-appearance: textfield;
        }
      }
    }
  }
  @media only screen and (min-width: 1518px) {
    &_item {
      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
  @media only screen and (max-width: 1517px) {
    grid-template-columns: 50% 50%;
    &_item {
      margin-bottom: 10px;
      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
  @media only screen and (max-width: 720px) {
    grid-template-columns: 100%;
    &_item {
      margin-right: 0;
    }
  }
}
</style>
