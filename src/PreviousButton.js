import React from "react";
export default function PreviousButton(props) {
  const previousPage = `#${props.link}`;
  return (
    <div className="previousButton">
      <a href={previousPage}>previous</a>
    </div>
  );
}
