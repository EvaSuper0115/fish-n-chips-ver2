import React from "react";
import PhoneIcon from "./images/phone.png";
import JustEatLogo from "./images/justEat.png";
import DeliverooLogo from "./images/Deliveroo.png";
import FaceBookLogo from "./images/facebooklogo.png";
import InstagramLogo from "./images/Instagram_icon.png";
export default function FloatingOrderNote() {
  const socialMedias = [
    {
      method: FaceBookLogo,
      content: "Facebook",
      href: "https://www.facebook.com/adastralfishnchips",
    },
    {
      method: InstagramLogo,
      content: "Instagram",
      href: "https://www.instagram.com/adastralfishnchips/",
    },
  ];
  const details = [
    { method: PhoneIcon, content: "07578-617349", href: "tel:07578617349" },
    {
      method: JustEatLogo,
      content: "Just Eat",
      href: "https://www.just-eat.co.uk/restaurants-adastral-fish-and-chips-poole/menu/?utm_source=adastralfishnchips.co.uk&utm_medium=restaurant&utm_campaign=order%20button",
    },
    {
      method: DeliverooLogo,
      content: "Deliveroo",
      href: "https://deliveroo.co.uk/menu/Bournemouth/canford-heath-nuffield-industrial-estate/adastral-fish-and-chips?geohash=gcn8em33sn57",
    },
  ];
  return (
    <div className="floatingNote">
      {socialMedias.map((item, index) => (
        <a
          className="individualFloatingNote display-none-when-big-screen"
          key={index}
          href={item.href}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="floating-icon-adjustments"
            src={item.method}
            alt={item.content}
            title={item.content}
          />{" "}
        </a>
      ))}
      <div className="text-center itallic-subHeading display-none-when-extra-small">
        order:
      </div>
      {details.map((item, index) => (
        <a
          className="individualFloatingNote"
          key={index}
          href={item.href}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="floating-icon-adjustments"
            src={item.method}
            alt={item.content}
            title={item.content}
          />{" "}
        </a>
      ))}
    </div>
  );
}
