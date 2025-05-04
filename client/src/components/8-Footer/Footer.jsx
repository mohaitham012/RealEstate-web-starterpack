import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <section className="paddings innerWidth flexCenter f-container">
      <div className="flexColStart f-left">
        <img src='./logo2.png' alt='logo' width={120}/>
        <span className="secondaryText">
          Our vision is to make all people
          <br />
          the best place to live for them.
        </span>
      </div>

      <div className="f-right flexColStart">
        <span className='primaryText'>Information</span>
        <span className='secondaryText'> New Road Of Ras El Bar </span>

        <div className="flexCenter f-menu">
          <span>Property</span>
          <span>Services</span>
          <span>Products</span>
          <span>About Us</span>
        </div>
      </div>
    </section>
  );
}

export default Footer;
