import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalMoney: 90000000000,
    items: [
      {
        id: 1,
        name: "Big Mac",
        price: 2,
        image: "bigmac.jpg",
        quantity: 0
      },
      {
        id: 2,
        name: "Cup of Coffee",
        price: 4,
        image: "cupofcoffee.jpg",
        quantity: 0
      },
      {
        id: 3,
        name: "Book",
        price: 15,
        image: "book.jpg",
        quantity: 0
      },
      {
        id: 4,
        name: "Video Game",
        price: 60,
        image: "videogame.jpg",
        quantity: 0
      },
      {
        id: 5,
        name: "Charity",
        price: 100,
        image: "charity.jpg",
        quantity: 0
      },
      {
        id: 6,
        name: "Headphones",
        price: 200,
        image: "headphones.jpg",
        quantity: 0
      },
      {
        id: 7,
        name: "Air Jordans",
        price: 200,
        image: "airjordans.jpg",
        quantity: 0
      },
      {
        id: 8,
        name: "Skateboard",
        price: 300,
        image: "skateboard.jpg",
        quantity: 0
      },
      {
        id: 9,
        name: "Smartphone",
        price: 600,
        image: "smartphone.jpg",
        quantity: 0
      },
      {
        id: 10,
        name: "Gaming Console",
        price: 600,
        image: "gamingconsole.jpg",
        quantity: 0
      },
      {
        id: 11,
        name: "Bike",
        price: 800,
        image: "bike.jpg",
        quantity: 0
      },
      {
        id: 12,
        name: "Drone",
        price: 800,
        image: "drone.jpg",
        quantity: 0
      },
      {
        id: 13,
        name: "Designer Handbag",
        price: 1000,
        image: "designerhandbag.jpg",
        quantity: 0
      },
      {
        id: 14,
        name: "Jet Ski",
        price: 8000,
        image: "jetski.jpg",
        quantity: 0
      },
      {
        id: 15,
        name: "4K TV",
        price: 10000,
        image: "4ktv.jpg",
        quantity: 0
      },
      {
        id: 16,
        name: "Diamond Ring",
        price: 10000,
        image: "diamondring.jpg",
        quantity: 0
      },
      {
        id: 17,
        name: "Rolex",
        price: 15000,
        image: "rolex.jpg",
        quantity: 0
      },
      {
        id: 18,
        name: "Speed Boat",
        price: 30000,
        image: "speedboat.jpg",
        quantity: 0
      },
      {
        id: 19,
        name: "Food Truck",
        price: 50000,
        image: "foodtruck.jpg",
        quantity: 0
      },
      {
        id: 20,
        name: "Tesla",
        price: 70000,
        image: "tesla.jpg",
        quantity: 0
      },
      {
        id: 21,
        name: "Monster Truck",
        price: 150000,
        image: "monstertruck.jpg",
        quantity: 0
      },
      {
        id: 22,
        name: "Helicopter",
        price: 175000,
        image: "helicopter.jpg",
        quantity: 0
      },
      {
        id: 23,
        name: "Ferrari",
        price: 200000,
        image: "ferrari.jpg",
        quantity: 0
      },
      {
        id: 24,
        name: "Lamborghini",
        price: 200000,
        image: "lamborghini.jpg",
        quantity: 0
      },
      {
        id: 25,
        name: "Fire Truck",
        price: 200000,
        image: "firetruck.jpg",
        quantity: 0
      },
      {
        id: 26,
        name: "Town House",
        price: 200000,
        image: "townhouse.jpg",
        quantity: 0
      },
      {
        id: 27,
        name: "Bar",
        price: 300000,
        image: "bar.jpg",
        quantity: 0
      },
      {
        id: 28,
        name: "Pizza Shop",
        price: 500000,
        image: "pizzashop.jpg",
        quantity: 0
      },
      {
        id: 29,
        name: "Bar of Gold",
        price: 500000,
        image: "barofgold.jpg",
        quantity: 0
      },
      {
        id: 30,
        name: "Superbowl Ad",
        price: 5000000,
        image: "superbowlad.jpg",
        quantity: 0
      },
      {
        id: 31,
        name: "Beach House",
        price: 5000000,
        image: "beachhouse.jpg",
        quantity: 0
      },
      {
        id: 32,
        name: "Yacht",
        price: 10000000,
        image: "yacht.jpg",
        quantity: 0
      },
      {
        id: 33,
        name: "F16",
        price: 15000000,
        image: "f16.jpg",
        quantity: 0
      },
      {
        id: 34,
        name: "Skyscraper",
        price: 50000000,
        image: "skyscraper.jpg",
        quantity: 0
      },
      {
        id: 35,
        name: "Mansion",
        price: 50000000,
        image: "mansion.jpg",
        quantity: 0
      },
      {
        id: 36,
        name: "Rocket",
        price: 60000000,
        image: "rocket.jpg",
        quantity: 0
      },
      {
        id: 37,
        name: "Passenger Jet",
        price: 150000000,
        image: "passengerjet.jpg",
        quantity: 0
      },
      {
        id: 38,
        name: "Mona Lisa",
        price: 780000000,
        image: "monalisa.jpg",
        quantity: 0
      },
      {
        id: 39,
        name: "Cruise Ship",
        price: 1200000000,
        image: "cruiseship.jpg",
        quantity: 0
      },
      {
        id: 40,
        name: "NBA Team",
        price: 1300000000,
        image: "nbateam.jpg",
        quantity: 0
      },
      {
        id: 41,
        name: "MLB Team",
        price: 1500000000,
        image: "mlbteam.jpg",
        quantity: 0
      },
      {
        id: 42,
        name: "NFL Team",
        price: 2300000000,
        image: "nflteam.jpg",
        quantity: 0
      }
    ]
  },
  mutations: {
    addItem(state, item: Item) {
      state.items.push(item);
    },
    addToCart(state, id: number) {
      const item = state.items.find(item => item.id == id);
      if (!item) return;
      else if (item.price > state.totalMoney) return;

      state.totalMoney -= item.price;
      item.quantity++;
    },
    removeFromCart(state, id: number) {
      const item = state.items.find(item => item.id == id);
      if (!item) return;
      else if (item.quantity < 1) return;

      state.totalMoney += item.price;
      item.quantity--;
    },
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
  },
  actions: {},
  modules: {}
});
