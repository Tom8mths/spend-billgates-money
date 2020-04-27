<template>
  <div class="container">
    <section>
      <div class="title">
        <h1>Your Shopping Spree</h1>
      </div>
      <div class="cart">
        <div v-for="item in items" :key="item.id" class="cart__item">
          <img :src="getImage(item.image)" />
          <h3 class="cart__item_name">{{ item.name }}</h3>
          <h3 class="cart__item_quantity">x {{ item.quantity }}</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    items() {
      return this.$store.state.items.filter(item => item.quantity > 0);
    }
  },
  methods: {
    getImage(image) {
      return require(`../assets/images/${image}`);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";

section {
  background-color: $white;
  width: 100%;
  height: auto;
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
    grid-template-columns: 50% 50%;
    justify-items: center;
    align-items: center;
    grid-gap: 3px;
    grid-template-rows: 100px 100px 100px;
    width: auto;
    padding: 15px;
    overflow: auto;
    &__item {
      width: 100%;
      display: flex;
      align-items: center;
      img {
        height: auto;
        width: 15%;
        margin: 20px;
        float: left;
      }
      &_name {
        display: inline;
        font-size: 16px;
        font-weight: 400;
      }
      &_quantity {
        font-size: 16px;
        display: inline;
        font-weight: 900;
        margin-left: 10px;
      }
    }
  }
}
</style>
