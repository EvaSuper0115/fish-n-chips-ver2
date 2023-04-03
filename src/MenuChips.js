import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuChips(props) {
  const menuItems = [
    {
      food: "Chips",
      prices: [
        { size: "Small", price: 1.9 },
        { size: "Regular", price: 3.5 },
        { size: "Large", price: 5.3 },
      ],
    },
    { food: "Chip butty", prices: [{ price: 2.7 }] },
    {
      food: "Cheesy chips",
      prices: [
        { size: "Small", price: 3.5 },
        { size: "Regular", price: 5 },
        { size: "Large", price: 6.5 },
      ],
    },
    {
      food: "Curry chips",
      prices: [
        { size: "Regular", price: 5 },
        { size: "Large", price: 6.5 },
      ],
    },
    {
      food: "Cheesy curry chips",
      prices: [
        { size: "Regular", price: 5.7 },
        { size: "Large", price: 6.9 },
      ],
    },
  ];

  return (
    <div className="MenuChips" id={props.menuDetails.menuHref}>
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
