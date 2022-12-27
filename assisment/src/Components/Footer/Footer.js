import "./Footer.css";
import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
// import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="container grid grid-four-column">
        <div className="footerfirstdiv">
        <div className="header__logo">
          <PetsIcon className="header__logoImage" fontSize="large" />
          <h2 className="header_logoTitle">Animal Sheater</h2>
        </div>
        <div className="footer_header">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="footer_button">
          <button className="Adopt">
            <NavLink
              to="NewForm"
              className="navlink"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "white",
              })}
            >
              Adopt
            </NavLink>
          </button>
        </div>
        </div>
        {/* 2nd column */}
        <div className="footer-subscribe">
          <h2>GET IN TOUCH</h2>
        <div className="header__logo">
        <LocationOnIcon className="header__logoImage" fontSize="medium" />
          
          <h4 className="header_logoTitle">Address</h4>
        </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestiae soluta repellendus dolorum excepturi, id ipsa accusamus laudantium sit placeat illum, dolores inventore architecto dignissimos, tempora ea eius vero commodi.</p>
        <div className="footer-contact">
        <div className="header__logo">
          <EmailIcon className="header__logoImage" fontSize="medium" />
          <h4 className="header_logoTitle">Email: maliyavikas7@gmail.com</h4>
        </div>
          
        </div>
        <div className="footer-social">
          <h3>Follows Us</h3>
          <div className="footer-social--icons">
          <a
            href="https://www.instagram.com/vikasmaliya004/"
            target="_blank"
            rel="noreferrer"
          >
                <div className="nav__itemBasket" >
                <InstagramIcon fontSize='large'/>
                    </div>
                    </a>
            <div>
            <a
            href="https://twitter.com/Vikas06354243"
            target="_blank"
            rel="noreferrer"
          >
                <div className="nav__itemBasket" >
                <TwitterIcon fontSize='large'/>
                    </div>
                    </a>
            </div>
          </div>
        </div>
        </div>

        {/* 3rs column  */}
        <div className="layoutmain1">
          <h3>QUICK LINKS</h3>
            <div className='layout'>
            <NavLink to="/" className='navlink' style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}><span>Home</span></NavLink>
               </div>
               <div className='layout'>
                <NavLink to="NewForm" className='navlink' style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })} ><span>Contact us</span></NavLink>
                            

            </div>
            </div>
        
        

        
      </div>

      {/* bottom section  */}
      <div className="footer-bottom--section">
        <hr />
        <div className="container grid grid-two-column">
          <p>@{new Date().getFullYear()} Animal. All Rights Reserved</p>
          <div className="privacy">
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
