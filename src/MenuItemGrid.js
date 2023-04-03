import { React, useState, useEffect } from "react";
import Note from "./Note";
import SaveButton from "./SaveButton";
export default function MenuItemGrid(props) {
  let button = <button className="highlight-background">Save</button>;
  const [note, setNote] = useState(<div></div>);

  const [addedItems, setAddedItems] = useState([]);
  useEffect(() => {
    if (addedItems.length > 0) {
      const selectedItems = addedItems.map((item, index) => (
        <tr key={index}>
          <td className="note-items">
            {item.size} {item.food}
          </td>
          <td className="note-items">£{Number(item.price).toFixed(2)}</td>
        </tr>
      ));
      setNote(
        <div>
          <h4 className="note-title">My notes</h4>
          <table className="note-table">
            <tbody>{selectedItems}</tbody>
          </table>
          <h4 className="note-title">call: 07578-617349</h4>
        </div>
      );
    }
  }, [addedItems]);

  function handleAdd(event, size, price) {
    event.preventDefault();
    setAddedItems([
      ...addedItems,
      { food: props.food, size: size, price: price },
    ]);
  }
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
              <span
                onClick={(event) => handleAdd(event, item.size, item.price)}
                title={`save ${props.food} to note`}
              >
                <SaveButton button={button} />
              </span>
            </div>
          ))}
        </div>
      </div>
      <Note note={note} />
    </div>
  );
}
