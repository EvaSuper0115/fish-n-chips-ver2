import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuChips(props) {
  const menuItems = [
    {
      food: "Chips",
      prices: [
        { size: "Small", price: 1.6 },
        { size: "Regular", price: 2.8 },
        { size: "Large", price: 4.2 },
      ],
    },
    { food: "Chip butty", prices: [{ price: 2.4 }] },
    { food: "Cheesy chips", prices: [{ price: 7.5 }] },
    {
      food: "Curry chips",
      prices: [
        { size: "Regular", price: 4.1 },
        { size: "Large", price: 5.4 },
      ],
    },
    {
      food: "Cheesy curry chips",
      prices: [
        { size: "Regular", price: 4.7 },
        { size: "Large", price: 6 },
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
