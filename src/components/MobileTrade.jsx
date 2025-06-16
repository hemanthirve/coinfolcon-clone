import React from "react";

const MobileTrade = () => {
  return (
    <div>
        <div className="mobile-section">
      <div className="mobile-left-section">
        <img src="/mobile.webp" alt="" />
      </div>

      <div className="mobile-rigth-section">
        <h1>Trade on the go</h1>
        <p className="mobile-para">
          No matter where you are, trading is just one click away. Stay updated
          on your investment anytime and stay informed on the latest price of
          Bitcoin, Ethereum, and other trending digital assets. Available on iOS
          and Android.
        </p>
       <button className="get-Btn">Get Started</button><br />
       <img src="/Store-image.png" alt="" />
      </div>
      
    </div>
    <div className="Start">
        <h1 className="Start-para">Start with Bitcoin now</h1>
        <p>Get started with €5 or less</p>
      </div>
    </div>
  );
};

export default MobileTrade;
