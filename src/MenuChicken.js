import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuChicken(props) {
  const menuItems = [
    { food: "Quarter breast", prices: [{ price: 5.9 }] },
    { food: "Nuggets (8)", prices: [{ price: 5.5 }] },
    { food: "Popcorn chicken", prices: [{ price: 3.2 }] },
    { food: "Spicy chicken wings (4)", prices: [{ price: 3.2 }] },
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
