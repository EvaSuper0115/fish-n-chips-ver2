import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuFish(props) {
  const menuItems = [
    {
      food: "Cod",
      prices: [
        { size: "Small", price: 4.2 },
        { size: "Regular", price: 6.8 },
        { size: "Large", price: 8.2 },
      ],
    },
    { food: "Haddock", prices: [{ price: 7.5 }] },
    { food: "Plaice", prices: [{ price: 7.5 }] },
    { food: "*in breadcrumbs*", prices: [{ price: 0.3 }] },
    { food: "Fishcake", prices: [{ price: 1.3 }] },
    { food: "Scampi (8)", prices: [{ price: 4.8 }] },
    { food: "Cod roe", prices: [{ price: 2 }] },
  ];

  return (
    <div className="MenuFish" id={props.menuDetails.menuHref}>
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
