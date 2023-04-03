import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuExtras(props) {
  const menuItems = [
    {
      food: "Heinz Ketchup (Squeeze Me!) - 26ml sachet",
      prices: [{ price: 0.7 }],
    },
    {
      food: "Heinz Mayonnaise (Squeeze Me!) - 26ml sachet",
      prices: [{ price: 0.7 }],
    },
    {
      food: "Heinz Tartare Sauce (Squeeze Me!) - 26ml sachet",
      prices: [{ price: 0.7 }],
    },
    {
      food: "Sarson’s Malt Vinegar - 250ml Bottle",
      prices: [{ price: 2.5 }],
    },
    {
      food: "Heinz Ketchup - 220ml Bottle",
      prices: [{ price: 2.6 }],
    },
  ];

  return (
    <div className="MenuOthers" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{`${props.menuDetails.menuTitle} `}</h3>
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
