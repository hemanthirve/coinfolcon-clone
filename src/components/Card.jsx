import React from "react";

const Card = ({ image, title, subtitle }) => {
  return (
    <div className="Card">
      <div>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p className="payment-para">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
