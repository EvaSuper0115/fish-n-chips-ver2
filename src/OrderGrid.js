import React from "react";

export default function OrderGrid(props) {
  return (
    <div className="order-grid ">
      <a
        id="order-links"
        className="float-end"
        href={props.link1}
        target="_blank"
        rel="noreferrer"
        title={props.linkTitle1}
      >
        <div className="high-light-text">
          <span>
            <img
              className="icon-adjustments"
              src={props.logo1}
              alt="logo-one"
            ></img>
          </span>
          <span style={{ color: props.textColor }}>{props.content1}</span>
        </div>
      </a>
      <a
        id="order-links"
        className="float-start high-light-text"
        href={props.link2}
        target="_blank"
        rel="noreferrer"
        title={props.linkTitle2}
      >
        <div className="">
          <span>
            <img
              className="icon-adjustments"
              src={props.logo2}
              alt="logo-two"
            ></img>
          </span>
          <span style={{ color: props.textColor }}>{props.content2}</span>
        </div>
      </a>
    </div>
  );
}
