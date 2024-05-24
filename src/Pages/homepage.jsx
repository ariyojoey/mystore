import React from "react";
import Shirt from "../assets/01.png";
import Headphones from "../assets/02.png";
import Glasses from "../assets/03.png";
import Boots from "../assets/04.png";
import Ticket from "../assets/05.png";
import Backpack from "../assets/06.png";
import Joystick from "../assets/07.png";
import Food from "../assets/08.png";
import Handbag from "../assets/09.png";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";

export const items = [
  {
    id: 1,
    image: Shirt,
    price: "120.22",
    title: "Polo Shirt",
    description:
      "A classic polo shirt for all occasions. Playing golf? Pair it with some khakis. Preppy party? Pop that collar! Let your polo reflect your personality, so your brain doesn’t have to.",
  },
  {
    id: 2,
    image: Headphones,
    price: "999.99",
    title: "Headphones",
    description:
      "Audio perfection, award-winning noise cancellation, and a design as sleek as a sports car. Don’t be fooled by the price, these are the best headphones on the market—guaranteed!",
  },
  {
    id: 3,
    image: Glasses,
    price: "999.99",
    title: "Sunglasses",
    description:
      "Surf, sand, and sunglasses: summertime perfection. These aviator sunnies protect your precious peepers from hazardous UV rays, day or night. Bonus: they make you look kinda cool.",
  },
  {
    id: 4,
    image: Boots,
    price: "999.99",
    title: "HBoots",
    description:
      "These boots fall above the ankle, so you don’t need to buy those no-show half socks that constantly fall off your heels. We think these boots are waterproof, but please let us know.",
  },
  {
    id: 5,
    image: Ticket,
    price: "999.99",
    title: "Tickets",
    description:
      "A generic ticket to an unspecified event on either May 10 or October 5 (depending on which side of the pond you hail from). One seat only, one night only. No refunds, no regrets.",
  },
  {
    id: 6,
    image: Backpack,
    price: "999.99",
    title: "Backpack",
    description:
      "Also called a backsack, knapsack, rucksack, or packsack, this is the preferred load-carrying method of hikers and students. We think these ones are waterproof, but please let us know.",
  },
  {
    id: 7,
    image: Joystick,
    price: "999.99",
    title: "Joypad",
    description:
      "Maybe you need this device for your existing gaming console. Maybe you just want to pretend you’ve got a gaming console. We’re not here to judge! Buy, and you shall receive joy.",
  },
  {
    id: 8,
    image: Food,
    price: "999.99",
    title: "Food Delivery",
    description:
      "Just like your school cafeteria’s menu in the last few days before summer break, this “manager’s special” mealbox is a mystery. On the plus side, we’ll deliver it right to your doorstep.",
  },
  {
    id: 9,
    image: Handbag,
    price: "499.99",
    title: "Handbag",
    description:
      "The dorsal fin of an orca whale. An actual oil slick. The earthly manifestation of a black hole. Nighttime with pockets. Vantablack lining. The world’s most elusive handbag",
  },
];

const HomePage = () => {
  let history = useNavigate();
  const itemsMap = items.map((e) => {
    return (
      <Card
        title={e.title}
        price={e.price}
        image={e.image}
        key={e.title}
        onClick={() => history(`/products/${e.id}`)}
      />
    );
  });
  return (
    <div className="min-h-screen">
      <Header />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 md:px-12 lg:px-16 gap-6 mt-5">
        {itemsMap}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
