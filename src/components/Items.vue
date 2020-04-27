<template>
  <div class="container">
    <div class="container__items">
      <div
        v-bind:key="item.id"
        v-for="item in items"
        class="container__items_item"
      >
        <img :src="getImage(item.image)" :alt="item.name" />
        <h3>{{ item.name }}</h3>
        <h4>${{ item.price }}</h4>
        <div class="actions">
          <button class="btn btn-danger disabled">Sell</button>
          <input type="number" v-model="counter" />
          <button v-on:click="increment" class="btn btn-primary">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Items",
  data: function() {
    return {
      items: ""
    };
  },
  methods: {
    getImage(image) {
      return require(`../assets/images/${image}`);
    },

    increment() {
      this.counter++;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";
@import "@/assets/sass/_buttons.scss";

.container__items {
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: 33.3% 33.33% 33.3%;

  &_item {
    vertical-align: top;
    display: inline-block;
    text-align: center;
    background-color: $white;
    margin-right: 10px;
    margin-bottom: 10px;
    img {
      margin: 0 51px;
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
