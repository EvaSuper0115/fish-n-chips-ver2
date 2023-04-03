import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuChicken(props) {
  const menuItems = [
    { food: "Quarter breast", prices: [{ price: 5 }] },
    { food: "Nuggets (8)", prices: [{ price: 4.6 }] },
    { food: "Popcorn chicken", prices: [{ price: 2.7 }] },
    { food: "Spicy chicken wings (4)", prices: [{ price: 2.7 }] },
  ];

  return (
    <div className="MenuChicken" id={props.menuDetails.menuHref}>
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
