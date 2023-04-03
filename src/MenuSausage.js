import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuSausage(props) {
  const menuItems = [
    {
      food: "Plain sausage",
      prices: [
        { size: "Small", price: 1.2 },
        { size: "Large", price: 1.9 },
      ],
    },
    {
      food: "Battered sausage",
      prices: [
        { size: "Small", price: 1.3 },
        { size: "Large", price: 2 },
      ],
    },
    {
      food: "Saveloy",
      prices: [{ price: 1.9 }],
    },
    {
      food: "Bigfoot  *served in a baguette*",
      prices: [{ price: 4.1 }],
    },
    {
      food: "Giant battered sausage",
      prices: [{ price: 2 }],
    },
  ];

  return (
    <div className="MenuSausage" id={props.menuDetails.menuHref}>
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
