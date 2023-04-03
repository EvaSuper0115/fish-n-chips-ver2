import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuMealDeal(props) {
  const menuItems = [
    { food: "Meal deal cod & chips", prices: [{ price: 7 }] },
    { food: "Meal deal cheese burger & chips", prices: [{ price: 5.9 }] },
    { food: "Meal deal chicken nuggets & chips", prices: [{ price: 6.2 }] },
    { food: "Meal deal large Sausage & chips", prices: [{ price: 4.7 }] },
    { food: "Meal deal fishcake & chips", prices: [{ price: 4.2 }] },
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
