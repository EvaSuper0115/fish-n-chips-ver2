import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuPie(props) {
  const menuItems = [
    {
      food: "Chicken & mushroom pie",
      prices: [{ price: 3.8 }],
    },
    {
      food: "Steak & kidney pie",
      prices: [{ price: 3.8 }],
    },
    {
      food: "Beef & onion pie",
      prices: [{ price: 3.8 }],
    },
  ];

  return (
    <div className="MenuPie" id={props.menuDetails.menuHref}>
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
