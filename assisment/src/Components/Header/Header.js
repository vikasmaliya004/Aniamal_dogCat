import React from 'react';
import "./Header.css";
import PetsIcon from '@mui/icons-material/Pets';
import { NavLink } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Header = () => {
    return (
        <div className='header'>
            <div className="header__logo">
            <PetsIcon className='header__logoImage' fontSize='large'/>

           <h2 className='header__logoTitle'>Animal Sheater</h2>
            </div>
            <div className="layoutmain">
            <div className='layout'>
            <NavLink to="/" className='navlink' style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}><span>Home</span></NavLink>
               </div>
               <div className='layout'>
                <NavLink to="NewForm" className='navlink' style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })} ><span>Contact us</span></NavLink>
                            

            </div>
            </div>
           
            <div className="header__nav">
                <div className="nav__item">
                  <span className="nav__itemLineOne">Hello Guest</span>
                  <span className="nav__itemLineTwo">Sign In</span>

                </div>
                <div className="nav__item">
                    
                  <span className="nav__itemLineOne">Your</span>
                  <span className="nav__itemLineTwo">Shop</span>
                </div>

                <div className='sociallink'>  
                <a
            href="https://www.linkedin.com/uas/login-submit"
            target="_blank"
            rel="noreferrer"
          >
                <div className="nav__itemBasket" >
                <LinkedInIcon fontSize='large'/>
                    </div>
                    </a>
                    </div>

<div className='sociallink'>  
                <a
            href="https://www.instagram.com/vikasmaliya004/"
            target="_blank"
            rel="noreferrer"
          >
                <div className="nav__itemBasket" >
                <InstagramIcon fontSize='large'/>
                    </div>
                    </a>
                    </div>

                    <div className='sociallink'>  
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
    );
}

export default Header;
