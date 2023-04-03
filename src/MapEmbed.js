import React from "react";

export default function MapEmbed() {
  return (
    <div className="MapEmbed center-content">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.8097565219964!2d-1.9668543500038422!3d50.74201727941606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4873a797fe1c833b%3A0x4efc99229637c3ca!2sAdastral%20Fish%20%26%20Chips!5e0!3m2!1sen!2suk!4v1679496327911!5m2!1sen!2suk"
        className="MapEmbed"
        title="Adastral Fish & Chips Google Map"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
