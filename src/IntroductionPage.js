import React from "react";
import fishNChipsImage from "./images/fish-chips.png";
import pieNSauceImage from "./images/food-image-currysauce.png";
import OrderGrid from "./OrderGrid";
import JustEatLogo from "./images/justEat.png";
import PhoneIcon from "./images/phone.png";

export default function IntroductionPage(props) {
  return (
    <div className="IntroductionPage" id={props.id}>
      <div className="half-a-page-grid">
        <div className="introduction-half-page-image">
          <div className="section-padding">
            <h3 className="white-text largeHeading"> Fresh n’ Tasty !</h3>
            <p className="secondary-text-color itallic-subHeading">
              All our fish is cooked to order, this will ensure the fish tastes
              as crispy & light as possible.
            </p>
          </div>
        </div>
        <div className="half-a-page-content">
          <div className="section-padding">
            <h2 className="black-large-title">Must Try</h2>
            <h3 className="black-subtitle">
              Our Specialty Homemade Curry Sauce.{" "}
            </h3>
            <p>
              A perfect accompaniment with chips (sprinkle of salt and vinegar
              on the chips) and is suitable for vegetarians.
            </p>
            <div className="image-grid">
              <img
                className="sqaure-image"
                src={fishNChipsImage}
                alt="fish-chips"
              ></img>
              <img
                className="sqaure-image"
                src={pieNSauceImage}
                alt="pieNSauce"
              ></img>
            </div>
            <h2 className="black-large-title display-none-when-extra-small">
              Order Now
            </h2>
            <OrderGrid
              textColor="black"
              logo1={JustEatLogo}
              logo2={PhoneIcon}
              link1={`https://www.just-eat.co.uk/restaurants-adastral-fish-and-chips-poole/menu/?utm_source=adastralfishnchips.co.uk&utm_medium=restaurant&utm_campaign=order%20button`}
              link2={`tel:07578617349`}
              content1={`Just Eat`}
              content2={`07578-617349`}
              linkTitle1={`Order on Just Eat`}
              linkTitle2={`Call Adastral Fish & Chips now`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
