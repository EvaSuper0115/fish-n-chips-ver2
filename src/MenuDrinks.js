import React from "react";
import MenuItemGrid from "./MenuItemGrid";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
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
      <div className="stay-middle-section-padding">
        <div className="previous-menu-next-grid">
          <PreviousButton link={props.linkToPreviousPage} />
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
          <NextButton link={props.linkToNextPage} />
        </div>
      </div>
    </div>
  );
}
