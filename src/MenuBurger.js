import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuBurger(props) {
  const menuItems = [
    {
      food: "Beef burger",
      prices: [
        { size: "Small", price: 2.8 },
        { size: "Large", price: 3.8 },
      ],
    },
    {
      food: "Cheese burger",
      prices: [
        { size: "Small", price: 3.1 },
        { size: "Large", price: 4.1 },
      ],
    },
    {
      food: "Chicken burger",
      prices: [
        { size: "Small", price: 3.4 },
        { size: "Large", price: 4.9 },
      ],
    },
    {
      food: "Spicy chicken burger",
      prices: [
        { size: "Small", price: 3.4 },
        { size: "Large", price: 4.9 },
      ],
    },
    {
      food: "Veggie burger",
      prices: [
        { size: "Small", price: 3 },
        { size: "Large", price: 4 },
      ],
    },
    {
      food: "Extra cheese or pineapple",
      prices: [{ price: 0.3 }],
    },
  ];

  return (
    <div className="MenuBurger" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{props.menuDetails.menuTitle}</h3>
          {menuItems.map((item) => (
            <MenuItemGrid
              key={item.food}
              food={item.food}
              price={item.prices}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
