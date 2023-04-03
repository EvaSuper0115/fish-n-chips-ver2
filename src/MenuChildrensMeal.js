import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuChildrensMeal(props) {
  const menuItems = [
    { food: "Children cod & chips", prices: [{ price: 5.2 }] },
    { food: "Children nuggets & chips", prices: [{ price: 4.5 }] },
    { food: "Children fishcake & chips", prices: [{ price: 3.6 }] },
    { food: "Children sausage & chips", prices: [{ price: 3.5 }] },
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
