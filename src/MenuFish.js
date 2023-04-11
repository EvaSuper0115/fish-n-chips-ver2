import React from "react";
import MenuItemGrid from "./MenuItemGrid";
import NextButton from "./NextButton";
export default function MenuFish(props) {
  const menuItems = [
    {
      food: "Cod",
      prices: [
        { size: "Small", price: 5.1 },
        { size: "Regular", price: 8.3 },
        { size: "Large", price: 10.3 },
      ],
    },
    { food: "Haddock", prices: [{ price: 9.6 }] },
    { food: "Plaice", prices: [{ price: 9.6 }] },
    { food: "*in breadcrumbs*", prices: [{ price: 0.3 }] },
    { food: "Fishcake", prices: [{ price: 1.7 }] },
    { food: "Scampi (8)", prices: [{ price: 5.6 }] },
    { food: "Cod roe", prices: [{ price: 2.8 }] },
  ];

  return (
    <div className="MenuFish" id={props.menuDetails.menuHref}>
      <div className="stay-middle-section-padding">
        <div className="previous-menu-next-grid">
          <div></div>
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
