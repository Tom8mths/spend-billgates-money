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
          <input type="text" />
          <button class="btn btn-primary">Buy</button>
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
      items: [
        {
          id: 1,
          name: "Big Mac",
          price: 2,
          image: "bigmac.jpg"
        },
        {
          id: 2,
          name: "Cup of Coffee",
          price: 4,
          image: "cupofcoffee.jpg"
        },
        {
          id: 3,
          name: "Book",
          price: 15,
          image: "book.jpg"
        },
        {
          id: 4,
          name: "Video Game",
          price: 60,
          image: "videogame.jpg"
        },
        {
          id: 5,
          name: "Charity",
          price: 100,
          image: "charity.jpg"
        },
        {
          id: 6,
          name: "Headphones",
          price: 200,
          image: "headphones.jpg"
        },
        {
          id: 7,
          name: "Air Jordans",
          price: 200,
          image: "airjordans.jpg"
        },
        {
          id: 8,
          name: "Skateboard",
          price: 300,
          image: "skateboard.jpg"
        },
        {
          id: 9,
          name: "Smartphone",
          price: 600,
          image: "smartphone.jpg"
        },
        {
          id: 10,
          name: "Gaming Console",
          price: 600,
          image: "gamingconsole.jpg"
        },
        {
          id: 11,
          name: "Bike",
          price: 800,
          image: "bike.jpg"
        },
        {
          id: 12,
          name: "Drone",
          price: 800,
          image: "drone.jpg"
        },
        {
          id: 13,
          name: "Designer Handbag",
          price: 1000,
          image: "designerhandbag.jpg"
        },
        {
          id: 14,
          name: "Jet Ski",
          price: 8000,
          image: "jetski.jpg"
        },
        {
          id: 15,
          name: "4K TV",
          price: 10000,
          image: "4ktv.jpg"
        },
        {
          id: 16,
          name: "Diamond Ring",
          price: 10000,
          image: "diamondring.jpg"
        },
        {
          id: 17,
          name: "Rolex",
          price: 15000,
          image: "rolex.jpg"
        },
        {
          id: 18,
          name: "Speed Boat",
          price: 30000,
          image: "speedboat.jpg"
        },
        {
          id: 19,
          name: "Food Truck",
          price: 50000,
          image: "foodtruck.jpg"
        },
        {
          id: 20,
          name: "Tesla",
          price: 70000,
          image: "tesla.jpg"
        },
        {
          id: 21,
          name: "Monster Truck",
          price: 150000,
          image: "monstertruck.jpg"
        },
        {
          id: 22,
          name: "Helicopter",
          price: 175000,
          image: "helicopter.jpg"
        },
        {
          id: 23,
          name: "Ferrari",
          price: 200000,
          image: "ferrari.jpg"
        },
        {
          id: 24,
          name: "Lamborghini",
          price: 200000,
          image: "lamborghini.jpg"
        },
        {
          id: 25,
          name: "Fire Truck",
          price: 200000,
          image: "firetruck.jpg"
        },
        {
          id: 26,
          name: "Town House",
          price: 200000,
          image: "townhouse.jpg"
        },
        {
          id: 27,
          name: "Bar",
          price: 300000,
          image: "bar.jpg"
        },
        {
          id: 28,
          name: "Pizza Shop",
          price: 500000,
          image: "pizzashop.jpg"
        },
        {
          id: 29,
          name: "Bar of Gold",
          price: 500000,
          image: "barofgold.jpg"
        },
        {
          id: 30,
          name: "Superbowl Ad",
          price: 5000000,
          image: "superbowlad.jpg"
        },
        {
          id: 31,
          name: "Beach House",
          price: 5000000,
          image: "beachhouse.jpg"
        },
        {
          id: 32,
          name: "Yacht",
          price: 10000000,
          image: "yacht.jpg"
        },
        {
          id: 33,
          name: "F16",
          price: 15000000,
          image: "f16.jpg"
        },
        {
          id: 34,
          name: "Skyscraper",
          price: 50000000,
          image: "skyscraper.jpg"
        },
        {
          id: 35,
          name: "Mansion",
          price: 50000000,
          image: "mansion.jpg"
        },
        {
          id: 36,
          name: "Rocket",
          price: 60000000,
          image: "bigmac.jpg"
        },
        {
          id: 37,
          name: "Passenger Jet",
          price: 150000000,
          image: "passengerjet.jpg"
        },
        {
          id: 38,
          name: "Mona Lisa",
          price: 780000000,
          image: "bigmac.jpg"
        },
        {
          id: 39,
          name: "Cruise Ship",
          price: 1200000000,
          image: "cruiseship.jpg"
        },
        {
          id: 40,
          name: "NBA Team",
          price: 1300000000,
          image: "nbateam.jpg"
        },
        {
          id: 41,
          name: "MLB Team",
          price: 1500000000,
          image: "mlbteam.jpg"
        },
        {
          id: 42,
          name: "NFL Team",
          price: 2300000000,
          image: "nflteam.jpg"
        }
      ]
    };
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
@import "@/assets/sass/_buttons.scss";

.container__items {
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: auto auto auto;
  &_item {
    vertical-align: top;
    display: inline-block;
    text-align: center;
    background-color: $white;
    margin-right: 10px;
    margin-bottom: 10px;
    &:nth-child(3n) {
      margin-right: 0;
    }
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
      padding: 9px 12px;
      margin: 25px 0 0;
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
}
</style>
