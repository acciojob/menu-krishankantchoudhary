import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/App.css";

const menuData = [
  {
    id: 1,
    name: "Pancakes",
    category: "breakfast",
    price: 5,
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b",
    info: "Breakfast dishes are light yet nutritious meals served in the morning to provide energy for the day. They usually include eggs.",
  },
  {
    id: 2,
    name: "Omelette",
    category: "breakfast",
    price: 6,
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    info: "Breakfast dishes are light yet nutritious meals served in the morning to provide energy for the day. They usually include eggs.",
  },
  {
    id: 3,
    name: "French Toast",
    category: "breakfast",
    price: 7,
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    info: "Breakfast dishes are light yet nutritious meals served in the morning to provide energy for the day. They usually include eggs.",
  },
  {
    id: 4,
    name: "Burger",
    category: "lunch",
    price: 10,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    info: "Breakfast dishes are light yet nutritious meals served in the morning to provide energy for the day. They usually include eggs.",
  },
  {
    id: 5,
    name: "Pizza",
    category: "lunch",
    price: 12,
    image: "https://images.unsplash.com/photo-1548365328-9f547f9a1b3f",
    info: "Breakfast dishes are light yet nutritious meals served in the morning to provide energy for the day. They usually include eggs.",
  },
  {
    id: 6,
    name: "Pasta",
    category: "lunch",
    price: 11,
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    info: "Breakfast dishes are light yet nutritious meals served in the morning to provide energy for the day. They usually include eggs.",
  },
  {
    id: 7,
    name: "Chocolate Shake",
    category: "shakes",
    price: 6,
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767",
    info: "Breakfast dishes are light yet nutritious meals served in the morning to provide energy for the day. They usually include eggs.",
  },
  {
    id: 8,
    name: "Strawberry Shake",
    category: "shakes",
    price: 7,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    info: "Breakfast dishes are light yet nutritious meals served in the morning to provide energy for the day. They usually include eggs.",
  },
];

const App = () => {
  const [items, setItems] = useState(menuData);

  const handlefilter = (category) => {
    const filteritem = menuData.filter((item) => item.category === category);
    setItems(filteritem);
  };

  const handleAll=()=>{
    setItems(menuData)
  }

  return (
    <div id="main">
      <h2>Our Menu</h2>
      <hr></hr>
      <div className="btn-container">
        <button
        onClick={handleAll}
        >All</button>
        <button id="filter-btn-1" onClick={() => handlefilter("breakfast")}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => handlefilter("lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => handlefilter("shakes")}>
          Shakes
        </button>
      </div>

      <Menu items={items}></Menu>
    </div>
  );
};

export default App;
