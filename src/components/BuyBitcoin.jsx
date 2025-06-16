import React from "react";

const BuyBitcoin = () => {
  return (
    <div className="Buy-section">
      <div className="Buy-left-section">
        <video
          className="Buy-video"
          src="/Buy-sell-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
      <div className="Buy-right-section">
        <h1>
          Buy Bitcoin <br />
          with Credit Card
        </h1>
        <p>
          Buy and sell popular digital currencies lightning fast and <br /> keep
          track of them in the one place. Fastest access to the <br /> world of
          cryptocurrencies.
        </p>
        <button  className="get-Btn">Get Started</button>
      </div>
    </div>
  );
};

export default BuyBitcoin;
