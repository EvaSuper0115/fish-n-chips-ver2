import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuDrinks(props) {
  const menuItems = [
    { food: "Canned drinks 300ml", prices: [{ price: 1.4 }] },
    { food: "Fruit Shoot - Orange", prices: [{ price: 0.8 }] },
    { food: "Fruit Shoot - Apple Blackcurrant", prices: [{ price: 0.8 }] },
    {
      food: "Pepsi Max No Sugar Cola Can 330ml (Maximum taste, no sugar. A bold and refreshing fizzy drink)",
      prices: [{ price: 1 }],
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
