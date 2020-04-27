<template>
  <div class="container__items_item">
    <img :src="getImage(image)" :alt="name" />
    <h3>{{ name }}</h3>
    <h4>{{ formatMoney(price) }}</h4>
    <div class="actions">
      <button
        v-on:click="sell(id)"
        class="btn btn-danger"
        :class="{ disabled: quantity < 1 }"
      >
        Sell
      </button>
      <input type="number" :value="quantity" />
      <button
        v-on:click="buy(id)"
        class="btn btn-primary"
        :class="{ disabled: currentMoney < price }"
      >
        Buy
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Items",
  props: ["id", "name", "price", "image", "quantity"],
  computed: {
    currentMoney() {
      return this.$store.state.totalMoney;
    }
  },
  methods: {
    getImage(image) {
      return require(`../assets/images/${image}`);
    },
    buy(id) {
      this.$store.commit("addToCart", id);
    },
    sell(id) {
      this.$store.commit("removeFromCart", id);
    },
    formatMoney(money) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
      });
      return formatter.format(money);
    }
  }
};
</script>
