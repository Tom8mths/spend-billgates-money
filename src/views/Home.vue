<template>
  <div class="home">
    <Header />
    <Money />
    <Items />
    <Cart />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Money from "@/components/Money.vue";
import Items from "@/components/Items.vue";
import Cart from "@/components/Cart.vue";

export default {
  name: "Home",
  components: {
    Header,
    Money,
    Items,
    Cart
  }
};
</script>
