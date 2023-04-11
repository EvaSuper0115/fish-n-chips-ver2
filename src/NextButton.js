import React from "react";
export default function NextButton(props) {
  const linkToNextPage = `#${props.link}`;
  return (
    <span className="nextButton">
      <a href={linkToNextPage} title="next menu">
        <i className="fa-solid fa-angle-right"></i>
      </a>
    </span>
  );
}
