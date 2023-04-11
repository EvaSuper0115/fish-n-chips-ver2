import React from "react";
import MenuItemGrid from "./MenuItemGrid";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
export default function MenuSausage(props) {
  const menuItems = [
    {
      food: "Plain sausage",
      prices: [
        { size: "Small", price: 1.4 },
        { size: "Large", price: 2.3 },
      ],
    },
    {
      food: "Battered sausage",
      prices: [
        { size: "Small", price: 1.5 },
        { size: "Large", price: 2.4 },
      ],
    },
    {
      food: "Saveloy",
      prices: [{ price: 2.4 }],
    },
    {
      food: "Bigfoot  *served in a baguette*",
      prices: [{ price: 5.2 }],
    },
    {
      food: "Giant battered sausage",
      prices: [{ price: 3.9 }],
    },
  ];

  return (
    <div className="MenuSausage" id={props.menuDetails.menuHref}>
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
