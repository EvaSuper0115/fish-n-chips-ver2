import React from "react";
import MenuItemGrid from "./MenuItemGrid";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
export default function MenuBurger(props) {
  const menuItems = [
    {
      food: "Beef burger",
      prices: [
        { size: "Small", price: 3.3 },
        { size: "Large", price: 4.5 },
      ],
    },
    {
      food: "Cheese burger",
      prices: [
        { size: "Small", price: 3.7 },
        { size: "Large", price: 4.9 },
      ],
    },
    {
      food: "Chicken burger",
      prices: [
        { size: "Small", price: 4 },
        { size: "Large", price: 5.5 },
      ],
    },
    {
      food: "Spicy chicken burger",
      prices: [
        { size: "Small", price: 4 },
        { size: "Large", price: 5.5 },
      ],
    },
    {
      food: "Veggie burger",
      prices: [
        { size: "Small", price: 3.5 },
        { size: "Large", price: 4.6 },
      ],
    },
    {
      food: "Extra cheese or pineapple",
      prices: [{ price: 0.3 }],
    },
  ];

  return (
    <div className="MenuBurger" id={props.menuDetails.menuHref}>
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
