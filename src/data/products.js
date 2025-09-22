const products = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 499,
    img: require("../assets/images/marpizza.avif"),

    description: "Classic cheese & tomato pizza.",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: 599,
    img: require("../assets/images/peporon.jpg"),
    description: "Loaded with pepperoni & mozzarella.",
  },
  {
    id: 3,
    name: "Chocolate Cake",
    category: "Dessert",
    price: 299,
    img: require("../assets/images/choco.jpg"),
    description: "Rich and creamy chocolate cake.",
  },

  {
    id: 4,
    name: "Chicken Burger",
    category: "Burger",
    price: 399,
    img: require("../assets/images/burger.jpg"),
    description: "Tasty veggie patty with fresh veggies.",
  },
];

export default products;
