import React from "react";
export default function NextButton(props) {
  const linkToNextPage = `#${props.link}`;
  return (
    <div>
      <a href={linkToNextPage}>next</a>
    </div>
  );
}
