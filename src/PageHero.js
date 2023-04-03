import React from "react";
import GoogleMapIcon from "./images/Google_Maps_icon.png";
import FacebookIcon from "./images/facebooklogo.png";
import InstagramIcon from "./images/Instagram_icon.png";
import MenuButton from "./MenuButton";
import OrderGrid from "./OrderGrid";
import JustEatLogo from "./images/justEat.png";
import PhoneIcon from "./images/phone.png";

export default function PageHero(props) {
  return (
    <div className="PageHero">
      <div className="page-hero-section-padding">
        <div className="pagehero-top-grid">
          <a
            href="https://goo.gl/maps/Z7tGC88AYkEfxXTd9"
            target="_blank"
            rel="noreferrer"
            title="Adastral Fish n Chips on Google Maps"
          >
            <div className="white-text">
              <span>
                <img
                  className="icon-adjustments"
                  src={GoogleMapIcon}
                  alt="google-map-icon"
                ></img>
              </span>
              <span className="display-none-when-small">
                11 Adastral Square, Canford Heath, Poole, BH17 8SA
              </span>
            </div>
          </a>
          <a
            className="display-none-when-extra-small"
            href="https://www.facebook.com/adastralfishnchips"
            target="_blank"
            rel="noreferrer"
            title="Adastral Fish n Chips Facebook"
          >
            <img
              className="icon-adjustments float-end"
              src={FacebookIcon}
              alt="google-map-icon"
            ></img>
          </a>
          <a
            className="display-none-when-extra-small"
            href="https://www.instagram.com/adastralfishnchips/"
            target="_blank"
            rel="noreferrer"
            title="Adastral Fish n Chips Instagram"
          >
            <img
              className="icon-adjustments float-center"
              src={InstagramIcon}
              alt="google-map-icon"
            ></img>
          </a>
        </div>
        <section className="brand-name">
          <h1 className="largeHeading white-text text-center ">
            Adastral Fish & Chips
          </h1>
          <h2 className="subHeading secondary-text-color text-center">
            Delicious freshly cooked fish & chips
          </h2>
        </section>
        <MenuButton menuHref={props.menuHref} />
        <OrderGrid
          textColor="white"
          class="highlight-background"
          logo1={JustEatLogo}
          logo2={PhoneIcon}
          link1={`https://www.just-eat.co.uk/restaurants-adastral-fish-and-chips-poole/menu/?utm_source=adastralfishnchips.co.uk&utm_medium=restaurant&utm_campaign=order%20button`}
          content1={`Click here`}
          content2={`07578617349`}
          linkTitle1={`Order on Just Eat`}
          linkTitle2={`Adastral Fish & Chips Telephone Number for Ordering`}
        />
      </div>
    </div>
  );
}
