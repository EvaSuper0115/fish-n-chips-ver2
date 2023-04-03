import React from "react";
import OrderGrid from "./OrderGrid";
import DeliverooLogo from "./images/Deliveroo.png";
import JustEatLogo from "./images/justEat.png";
export default function OpeningHours(props) {
  return (
    <div className="OpeningHours" id={props.id}>
      <div className="half-a-page-grid">
        <div className="opening-hours-half-page-image">
          {" "}
          <div className="section-padding">
            <h3 className="white-text largeHeading">We're Open !</h3>
            <p className="secondary-text-color itallic-subHeading">
              All are welcome. Takeaways. Delivery. Collections.
            </p>
          </div>
        </div>
        <div className="half-a-page-content">
          <div className="section-padding">
            <h2 className="black-large-title">Opening Hours</h2>
            <div className="list-of-info">
              <p>
                Monday - Thursday
                <br />
                4:30pm - 8:30pm
              </p>
              <p>
                Friday & Saturday
                <br />
                12pm - 2pm & 4:30pm - 8:30pm
              </p>
              <p>Sunday Closed</p>
            </div>
            <p className="paragraph-of-small-info">
              We have moved our delivery service to Just Eat & Deliveroo. <br />
              This will enable us to take order & deliver much quicker
              throughout our opening hours.
            </p>
            <h2 className="black-large-title display-none-when-extra-small">
              Delivery & Collection
            </h2>
            <OrderGrid
              textColor="black"
              logo1={JustEatLogo}
              logo2={DeliverooLogo}
              link1={`https://www.just-eat.co.uk/restaurants-adastral-fish-and-chips-poole/menu/?utm_source=adastralfishnchips.co.uk&utm_medium=restaurant&utm_campaign=order%20button`}
              link2={`https://deliveroo.co.uk/menu/Bournemouth/canford-heath-nuffield-industrial-estate/adastral-fish-and-chips?geohash=gcn8em33sn57`}
              content1={`Just Eat`}
              content2={`Deliveroo`}
              linkTitle1={`Order on Just Eat`}
              linkTitle2={`Order on Deliveroo`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
