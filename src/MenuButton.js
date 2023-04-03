import React from "react";
export default function MenuButton(props) {
  return (
    <div className="MenuButton">
      <div className="center-content">
        <a className="button" title="View Menu" href={props.menuHref}>
          Menu
        </a>
      </div>
    </div>
  );
}
