export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  sale: boolean;
  rating: number;

  description: string;
  details: string;

  weight: string;
  category: string;
  ingredients: string[];
  delivery: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Burger",
    image: "/images/shop/Classic-Burger-Photoroom.png",
    price: 12,
    sale: true,
    rating: 5,

    description:
      "Our Classic Burger is made with 100% premium beef, fresh lettuce, ripe tomatoes, cheddar cheese, and our signature homemade sauce inside a freshly toasted sesame bun.",

    details:
      "Cooked fresh to order and served hot with crispy fries, this burger delivers the perfect balance of flavor, freshness, and satisfaction.",

    weight: "350g",
    category: "Burger",

    ingredients: [
      "Beef Patty",
      "Cheddar Cheese",
      "Lettuce",
      "Tomato",
      "Onion",
      "Pickles",
      "Sesame Bun",
      "Signature Sauce",
    ],

    delivery: "30–40 Minutes",
  },

  {
    id: 2,
    name: "Pepperoni Pizza",
    image: "/images/shop/Pepperoni-Pizza-Photoroom.png",
    price: 18,
    sale: false,
    rating: 5,

    description:
      "Our Pepperoni Pizza features a thin, crispy crust topped with rich tomato sauce, mozzarella cheese, and premium pepperoni slices.",

    details:
      "Freshly baked in our oven until golden brown, every slice is packed with cheesy goodness and bold pepperoni flavor.",

    weight: "650g",
    category: "Pizza",

    ingredients: [
      "Pizza Dough",
      "Mozzarella Cheese",
      "Pepperoni",
      "Tomato Sauce",
      "Oregano",
    ],

    delivery: "35–45 Minutes",
  },

  {
    id: 3,
    name: "Chicken Bucket",
    image: "/images/shop/Chicken-Bucket-Photoroom.png",
    price: 22,
    sale: true,
    rating: 5,

    description:
      "Enjoy crispy golden fried chicken prepared with our secret blend of herbs and spices for an irresistible crunch.",

    details:
      "Perfect for sharing with family or friends, every bucket is freshly cooked and served piping hot.",

    weight: "900g",
    category: "Chicken",

    ingredients: [
      "Chicken Pieces",
      "Seasoned Flour",
      "Herbs",
      "Spices",
      "Cooking Oil",
    ],

    delivery: "30–40 Minutes",
  },

  {
    id: 4,
    name: "French Fries",
    image: "/images/shop/French-Fries-Photoroom.png",
    price: 8,
    sale: false,
    rating: 5,

    description:
      "Golden French Fries made from premium potatoes and fried until perfectly crispy on the outside and fluffy inside.",

    details:
      "Seasoned with just the right amount of salt, they're the perfect side dish for any meal.",

    weight: "250g",
    category: "Snacks",

    ingredients: [
      "Fresh Potatoes",
      "Vegetable Oil",
      "Salt",
    ],

    delivery: "20–30 Minutes",
  },

  {
    id: 5,
    name: "Chicken Sandwich",
    image: "/images/shop/Chicken-Sandwich-Photoroom.png",
    price: 10,
    sale: false,
    rating: 5,

    description:
      "A juicy grilled chicken fillet served with crisp lettuce, fresh tomatoes, cheese, and creamy mayonnaise inside a soft bun.",

    details:
      "A delicious and satisfying sandwich prepared fresh for every order.",

    weight: "320g",
    category: "Sandwich",

    ingredients: [
      "Chicken Fillet",
      "Cheese",
      "Lettuce",
      "Tomato",
      "Mayonnaise",
      "Bun",
    ],

    delivery: "25–35 Minutes",
  },

  {
    id: 6,
    name: "Soft Drink",
    image: "/images/shop/Soft-Drinks-Photoroom.png",
    price: 5,
    sale: true,
    rating: 5,

    description:
      "A refreshing chilled soft drink that perfectly complements burgers, pizzas, sandwiches, and fried chicken.",

    details:
      "Served ice-cold for maximum refreshment and available in multiple popular flavors.",

    weight: "500ml",
    category: "Drinks",

    ingredients: [
      "Carbonated Water",
      "Sugar",
      "Natural Flavors",
    ],

    delivery: "Included with Order",
  },
];