import React from "react";
import Feature from "./Feature";
const Accessible = () => {
    const features = [
        {
            image:"/trading.png",
            title:"Instant trading",
            subtitle: "Real-time balance updates and notifications"
        },
         {
            image:"/fees.png",
            title:"Low & transparent fees",
            subtitle: "All our fees are transparent, upfront and listed when you make a trade."
        },
         {
            image:"/european.png",
            title:"European based",
            subtitle: "CoinFalcon is headquartered in the UK"
        },
         {
            image:"/support.png",
            title:"24/7 Support",
            subtitle: "Our support staff is available 24 hours a day to help"
        },
         {
            image:"/secure.png",
            title:"Secure storage",
            subtitle: "To keep your funds secure, we store 98% of digital funds in an offline, secure wallet."
        },
         {
            image:"/peace.png",
            title:"Trade with peace of mind",
            subtitle: "2FA, Browser, Session and Device Management, and more"
        }
    ];
  return (
    <div className="feature-section">
      <div>
        <h1>Accessible to anyone</h1>
        <p>
          Lightning fast transactions. Buy and sell with ease and peace of mind. <br />
          Invest in cryptocurrency today with just a few clicks.
        </p>
      </div>

      <div>
        <div className="features">
            {features.map((feature, index) => (
              <Feature
              key={index}
              image={feature.image}
              title={feature.title}
              subtitle={feature.subtitle}/>  
            ))}
        </div>
      </div>
    </div>
  );
};

export default Accessible;
