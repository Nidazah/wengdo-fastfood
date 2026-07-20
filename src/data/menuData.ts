export interface MenuItem {
  id: number;
  name: string;
  image: string;
  category: "Burger" | "Pizza" | "Chicken" | "Sandwich";
  price: number;
  rating: number;
  description: string;
  badge?: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Classic Beef Burger",
    image: "/images/menu/Classic Burger-Photoroom.png",
    category: "Burger",
    price: 12,
    rating: 5,
    description:
      "Juicy beef patty with cheddar cheese and fresh vegetables.",
    badge: "Popular",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    image: "/images/menu/Pepperoni Pizza-Photoroom.png",
    category: "Pizza",
    price: 18,
    rating: 5,
    description:
      "Loaded with pepperoni, mozzarella and tomato sauce.",
    badge: "New",
  },
  {
    id: 3,
    name: "Fried Chicken",
    image: "/images/menu/Fried Chicken-Photoroom.png",
    category: "Chicken",
    price: 14,
    rating: 5,
    description:
      "Crispy golden fried chicken served with special sauce.",
  },
  {
    id: 4,
    name: "Club Sandwich",
    image: "/images/menu/Club Sandwich-Photoroom.png",
    category: "Sandwich",
    price: 10,
    rating: 5,
    description:
      "Fresh grilled sandwich with chicken and vegetables.",
  },
  {
    id: 5,
    name: "Double Cheese Burger",
    image: "/images/menu/burger-1.png",
    category: "Burger",
    price: 15,
    rating: 5,
    description:
      "Double beef patties with extra cheddar cheese.",
  },
  {
    id: 6,
    name: "BBQ Pizza",
    image: "/images/menu/BBQ Pizza-Photoroom.png",
    category: "Pizza",
    price: 20,
    rating: 5,
    description:
      "Smoky BBQ chicken pizza with mozzarella.",
  },
  {
    id: 7,
    name: "Chicken Sandwich",
    image: "/images/menu/Chicken Sandwich-Photoroom.png",
    category: "Sandwich",
    price: 11,
    rating: 5,
    description:
      "Grilled chicken sandwich with lettuce and mayo.",
  },
  {
    id: 8,
    name: "Veggie Pizza",
    image: "/images/menu/Veggie Pizza-Photoroom.png",
    category: "Pizza",
    price: 17,
    rating: 5,
    description:
      "Fresh vegetables with mozzarella cheese.",
  },
  {
    id: 9,
    name: "Chicken Bucket",
    image: "/images/menu/Chicken Bucket-Photoroom.png",
    category: "Chicken",
    price: 22,
    rating: 5,
    description:
      "Family-size crispy chicken bucket.",
  },
];