import { React, useState } from "react";

export default function MenuItemGrid(props) {
  const [liked, setLiked] = useState("");

  function handleClick(event) {
    event.preventDefault();
    setLiked("liked-item");
  }
  return (
    <div className="MenuItemGrid">
      <div className="menu-item-grid">
        <div className={`menu-item-col`}>
          {props.food}
          <button onClick={handleClick} title={`Like ${props.food}`}>
            <i className={`fa-solid fa-heart ${liked}`}></i>
          </button>
          {liked !== "" && (
            <span>
              1<button>+</button>
            </span>
          )}
        </div>

        <div className="menu-item-col">
          {props.price.map((item, index) => (
            <div key={index}>
              <span className={`menu-item-col`}>
                {item.size} £{Number(item.price).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
