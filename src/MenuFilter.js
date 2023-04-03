import React from "react";
export default function MenuFilter(props) {
  return (
    <div className="MenuFilter section-padding" id={props.id}>
      <h2 className="black-large-title">What food would you like ?</h2>
      <div className="menuTypeGrid">
        {props.menuItems.map((menuItem, index) => (
          <a
            className="menuType white-text"
            key={index}
            href={`#${menuItem.menuHref}`}
            title={`${menuItem.menuTitle} Menu`}
          >
            {menuItem.menuTitle}
          </a>
        ))}
      </div>
    </div>
  );
}
