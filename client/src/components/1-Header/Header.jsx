// imports
import React, { useState } from 'react';
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler';
import { Link, NavLink } from 'react-router-dom'
// -----------imports--------------
const Header = () => {
  {/* make a use state to control menu to appeare and disppeare*/}
  const [menuOpened,setMenuOpened] = useState(false)
  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800)
    {
      return{right:!menuOpened && '100%'}
    }
  }
    {/* ---------------------------------------------------------
      make a use state to control menu to appeare and disppeare
      ---------------------------------------------------------*/}

      {/* the start of jsx elements*/}
  return (    
    <section className="h-wrapper">
      {/* the parent for every thing*/}
      <div className="h-container flexCenter innerWidth">

        {/* the logo image */}
        <Link to='/'>
        <img src="./logo.png" alt="logo" width={100} loading='lazy'/>
        </Link>
{/* --------------
                    the logo image-------------- */}

        {/* this event does when you click out side the menu the menu is hidden
            it takes useState(false) */}
        <OutsideClickHandler 
        onOutsideClick={()=>{
          setMenuOpened(false)
        }}
        >

        {/* the start of menu in the header */}  
        <div className="h-menu flexCenter"
        style={getMenuStyles( menuOpened)}
        >
            <NavLink to='/properties'>Properties</NavLink>
            <a href="mailto:mohamedhaithame320@gmail.com">Contact Us</a>
            <button className="button">Login</button>
        </div>
        {/*---------------------------------        
         the end of the menu in the header
         ------------------------------------*/}

        {/* ---------------------------
            the end of the event hidden
            ---------------------------*/}
        </OutsideClickHandler>
        
      {/* the icon which shows in the width less than 800 */}  
      <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
        <BiMenuAltRight size={35}/>
      </div>
      {/*--------------------------
      the end of the parent icon
      --------------------------*/}    
      </div>
            {/* the end of the parent for every thing*/}

    </section>
  );
        {/*----------------------- 
          the end of jsx elements
          -----------------------*/}
}

export default Header;
