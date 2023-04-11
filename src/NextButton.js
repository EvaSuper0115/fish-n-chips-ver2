import React from "react";
export default function NextButton(props) {
  const linkToNextPage = `#${props.link}`;
  return (
    <span className="nextButton">
      <a href={linkToNextPage}>next</a>
    </span>
  );
}
