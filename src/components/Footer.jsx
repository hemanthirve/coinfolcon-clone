import React from "react";

const Footer = () => {
  return (
    <div className="Footer-section">
      <div >
        <img className="logo" src="/Logo.png" alt="" />
      </div>

      <div>
        <h3 className="Footer-heading">Company</h3>
        <ul>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Fees</a>
          </li>
          <li>
            <a href="">Legal & privacy</a>
          </li>
          <li>
            <a href="">Refferal program</a>
          </li>
          <li>
            <a href="">CareersHiring</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="Footer-heading">Learn</h3>
        <ul>
          <li>
            <a href="">Prices</a>
          </li>
          <li>
            <a href="">Buy Bitcoin</a>
          </li>
          <li>
            <a href="">Buy Bitcoin Cash</a>
          </li>
          <li>
            <a href="">Buy Ethereum</a>
          </li>
          <li>
            <a href="">Buy Litecoin</a>
          </li>
          <li>
            <a href="">Buy XRP</a>
          </li>
          <li>
            <a href="">Buy IOTA</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="Footer-heading">Support</h3>
        <ul>
            <li><a href="">Help center</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">API</a></li>
        </ul>
      </div>

      <div>
        <h3 className="Footer-heading">Social</h3>
        <ul>
            <li><a href="">Blog</a></li>
            <li><a href="">Facebook</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">Reddit</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
