import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuChildrensMeal(props) {
  const menuItems = [
    { food: "Fish & chips", prices: [{ price: 6.1 }] },
    { food: "Nuggets & chips", prices: [{ price: 5.2 }] },
    { food: "Fishcake & chips", prices: [{ price: 4.3 }] },
    { food: "Sausage & chips", prices: [{ price: 3.9 }] },
  ];

  return (
    <div className="MenuOthers" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{`${props.menuDetails.menuTitle} (including a drink)`}</h3>
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