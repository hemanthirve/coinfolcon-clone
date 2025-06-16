import React from "react";

const TrackPortfolio = () => {
  return (
    <div className="Portfolio-section">
      <div className="Portfolio-left-section">
        <h1>Track your portfolio</h1>
        <p className="Portfolio-para">
          With CoinFalcon, you can always keep track of your funds. Track it by
          Time or by Profit / Loss calculations. This gives you an accurate view
          of your investment performance.
        </p>
        <button className="get-Btn">Get Started</button>
      </div>

      <div className="Portfolio-right-section">
        <video className="Chart-video" src="/chart.mp4" autoPlay muted loop playsInline></video>
      </div>
    </div>
  );
};

export default TrackPortfolio;
