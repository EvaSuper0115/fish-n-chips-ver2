import { React } from "react";

export default function MenuItemGrid(props) {
  return (
    <div className="MenuItemGrid">
      <div className="menu-item-grid">
        <div className="menu-item-col">{props.food}</div>
        <div className="menu-item-col">
          {props.price.map((item, index) => (
            <div key={index}>
              <span className="menu-item-col">
                {item.size} £{Number(item.price).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
