import React from "react";
export default function PreviousButton(props) {
  const previousPage = `#${props.link}`;
  return (
    <div className="previousButton">
      <a href={previousPage} title="previous menu">
        <i className="fa-solid fa-angle-left"></i>
      </a>
    </div>
  );
}
