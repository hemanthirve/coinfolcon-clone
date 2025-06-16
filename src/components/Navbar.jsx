import React from 'react'
import "../App.css"

const Navbar = () => {
  
  return (
    <div className='navigation'>
      <div className="navbar">
        <img className='logo' src="./Logo.png" alt="Logo" />
        <ul className='nav-options'>
          <li><a href="#">Products</a></li>
          <li><a href="#">Prices</a></li>
          
          <li className='down-arrow'>
            <a className='drop' href="#">Company</a>
            <img className='arrow' src="/down-arrow.png" alt="down arrow" />
            
            <div className='drop-down'>
              <a href="#">About us</a>
              <a href="#">Blog</a>
              <a href="#">Support</a>
            </div>
          </li>
        </ul>
      </div>

      <div className="nav-link">
        <a className="login" href="#">Log in</a>
        <button className='getBtn'>Get Started</button>
      </div>
    </div>
  )
}

export default Navbar
