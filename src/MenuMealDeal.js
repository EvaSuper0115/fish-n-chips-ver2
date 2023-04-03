import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuMealDeal(props) {
  const menuItems = [
    { food: "Cod & chips", prices: [{ price: 8.3 }] },
    { food: "Cheese burger & chips", prices: [{ price: 6.9 }] },
    { food: "Chicken nuggets & chips", prices: [{ price: 7.3 }] },
    { food: "Large sausage & chips", prices: [{ price: 5.8 }] },
    { food: "Fishcake & chips", prices: [{ price: 5.1 }] },
  ];

  return (
    <div className="MenuOthers" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="menu-card">
          <h3 className="itallic-subHeading">{`${props.menuDetails.menuTitle} (including a canned drink)`}</h3>
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
