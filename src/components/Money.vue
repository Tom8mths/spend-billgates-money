<template>
  <div class="container">
    <div class="container__money">
      <div id="moneyNav" class="money-nav sticky">{{ currentMoney }} left</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Money",
  computed: {
    currentMoney() {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
      });
      return formatter.format(this.$store.state.totalMoney);
    }
  },

  mounted: function() {
    const stickyChildren = document.querySelectorAll(".container__money")[0];
    const stickyParent = stickyChildren.parentElement;
    if (stickyParent) stickyParent.classList.add("sticky");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";

.container__money {
  .money-nav {
    background-color: $primary;
    color: $white;
    margin: 10px 0;
    padding: 20px;
    font-size: 32px;
    font-weight: 900;
    text-align: center;
  }
}

.fixed {
  position: fixed;
  top: 0;
  margin: 0;
  width: 100%;
  max-width: 1000px;
}

.sticky {
  position: sticky;
  top: 0;
}
</style>
