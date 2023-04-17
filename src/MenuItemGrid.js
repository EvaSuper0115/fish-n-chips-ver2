import { React, useState, useEffect } from "react";

export default function MenuItemGrid(props) {
  const [liked, setLiked] = useState("");
  const [likedTimes, setLikedTimes] = useState(0);

  useEffect(() => {
    if (likedTimes < 1) {
      setLiked("");
      setLikedTimes(0);
    }
  }, [likedTimes]);
  function handleBin(event) {
    event.preventDefault();
    setLiked("");
    setLikedTimes(0);
    console.log(likedTimes);
  }

  function handleMinus(event) {
    event.preventDefault();
    setLikedTimes(likedTimes - 1);
    console.log(likedTimes);
  }
  function handleAdd(event) {
    event.preventDefault();
    setLikedTimes(likedTimes + 1);
    console.log(likedTimes);
  }

  function handleClick(event) {
    event.preventDefault();
    setLiked("liked-item");

    setLikedTimes(1);
    console.log(likedTimes, "after");
  }
  function handleChange(event) {
    event.preventDefault();
    let chosenPrice = event.target.value;
    console.log(chosenPrice);
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
            <div>
              <span>{likedTimes}</span>
              <span>
                <button className="plus-minus-buttons" onClick={handleAdd}>
                  +
                </button>
                <button className="plus-minus-buttons" onClick={handleMinus}>
                  -
                </button>
              </span>
              <button className="plus-minus-buttons" onClick={handleBin}>
                <i className="fa-solid fa-dumpster"></i>
              </button>
            </div>
          )}
        </div>

        <div className="menu-item-col menu-price-col">
          {props.price.some((item) => item.size) ? (
            <form>
              <select onChange={handleChange}>
                <option>-choose size-</option>
                {props.price.map((item, index) => (
                  <option key={index} value={item.price}>
                    {item.size}{" "}
                    {item.price >= 1
                      ? "£" + Number(item.price).toFixed(2)
                      : Number(item.price * 100).toFixed(0) + "p"}
                  </option>
                ))}
              </select>
            </form>
          ) : (
            <div>
              {props.price.map((item, index) => (
                <span key={index} value={item.price}>
                  {item.price >= 1
                    ? "£" + Number(item.price).toFixed(2)
                    : Number(item.price * 100).toFixed(0) + "p"}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
