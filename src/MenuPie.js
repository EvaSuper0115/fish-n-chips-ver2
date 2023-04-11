import React from "react";
import MenuItemGrid from "./MenuItemGrid";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
export default function MenuPie(props) {
  const menuItems = [
    {
      food: "Chicken & mushroom pie",
      prices: [{ price: 4.2 }],
    },
    {
      food: "Steak & kidney pie",
      prices: [{ price: 4.2 }],
    },
    {
      food: "Beef & onion pie",
      prices: [{ price: 4.2 }],
    },
  ];

  return (
    <div className="MenuPie" id={props.menuDetails.menuHref}>
      <div className="stay-middle-section-padding">
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
