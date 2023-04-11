import React from "react";
import MenuItemGrid from "./MenuItemGrid";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
export default function MenuOthers(props) {
  const menuItems = [
    { food: "Cheese & onion Fry", prices: [{ price: 1.6 }] },
    { food: "Onion rings", prices: [{ price: 3.2 }] },
    { food: "Mozzarella sticks (4)", prices: [{ price: 3.2 }] },
    { food: "Buttered roll", prices: [{ price: 0.9 }] },
    { food: "Pea fritter", prices: [{ price: 1.5 }] },
    { food: "Pineapple fritter", prices: [{ price: 1.2 }] },
    { food: "Garlic mushrooms", prices: [{ price: 3.2 }] },
    { food: "Battered burger", prices: [{ price: 2.7 }] },
    { food: "Mushy peas", prices: [{ price: 1.2 }] },
    { food: "Curry sauce", prices: [{ price: 1.7 }] },
    { food: "Pickled onion", prices: [{ price: 0.4 }] },
    { food: "Pickled egg", prices: [{ price: 0.6 }] },
    { food: "Pickled gherkin", prices: [{ price: 0.6 }] },
    { food: "Fruit Shoot 200ml", prices: [{ price: 0.7 }] },
  ];

  return (
    <div className="MenuOthers" id={props.menuDetails.menuHref}>
      <div className="section-padding">
        <div className="previous-menu-next-grid">
          <PreviousButton link={props.linkToPreviousPage} />
          <div className="menu-card">
            <h3 className="itallic-subHeading">
              {props.menuDetails.menuTitle}
            </h3>
            {menuItems.map((item) => (
              <MenuItemGrid
                key={item.food}
                food={item.food}
                price={item.prices}
              />
            ))}
          </div>
          <NextButton link={props.linkToNextPage} />
        </div>
      </div>
    </div>
  );
}
