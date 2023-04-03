import React from "react";
import MenuItemGrid from "./MenuItemGrid";
export default function MenuOthers(props) {
  const menuItems = [
    { food: "Cheese & onion Fry", prices: [{ price: 1.4 }] },
    { food: "Onion rings", prices: [{ price: 2.7 }] },
    { food: "Mozzarella sticks (4)", prices: [{ price: 2.7 }] },
    { food: "Buttered roll", prices: [{ price: 0.8 }] },
    { food: "Pea fritter", prices: [{ price: 1.4 }] },
    { food: "Pineapple fritter", prices: [{ price: 1.1 }] },
    { food: "Garlic mushrooms", prices: [{ price: 2.7 }] },
    { food: "Battered burger", prices: [{ price: 2.3 }] },
    { food: "Mushy peas", prices: [{ price: 1.1 }] },
    { food: "Curry sauce", prices: [{ price: 1.5 }] },
    { food: "Pickled onion", prices: [{ price: 0.4 }] },
    { food: "Pickled egg", prices: [{ price: 0.6 }] },
    { food: "Pickled gherkin", prices: [{ price: 0.6 }] },
    { food: "Canned drink", prices: [{ price: 1.5 }] },
    { food: "Fruit Shoot", prices: [{ price: 0.7 }] },
  ];

  return (
    <div className="MenuOthers" id={props.menuDetails.menuHref}>
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
