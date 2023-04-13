import { React, useState, useEffect } from "react";

export default function MenuItemGrid(props) {
  const [liked, setLiked] = useState("");
  const [likedTimes, setLikedTimes] = useState(1);

  useEffect(() => {
    if (likedTimes < 1) {
      setLiked("");
      setLikedTimes(1);
    }
  }, [likedTimes]);
  function handleBin(event) {
    event.preventDefault();
    setLiked("");
    setLikedTimes(1);
  }

  function handleMinus(event) {
    event.preventDefault();
    setLikedTimes(likedTimes - 1);
  }
  function handleAdd(event) {
    event.preventDefault();
    setLikedTimes(likedTimes + 1);
  }

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
          {liked === "liked-item" && likedTimes > 0 && (
            <span>
              <span>{likedTimes}</span>
              <div>
                <button className="plus-minus-buttons" onClick={handleAdd}>
                  +
                </button>
                <button className="plus-minus-buttons" onClick={handleMinus}>
                  -
                </button>
                <button className="plus-minus-buttons" onClick={handleBin}>
                  <i className="fa-solid fa-dumpster"></i>
                </button>
              </div>
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
