import React,{useState} from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  ImageContainer,
  MobileBar,
  MobileNavMenu,
  Close
} from './NavElements';
import logo from '../Assets/logo.svg';

const Navbar = () => {
const [triggerBar, settriggerBar] = useState(false);
  return (
      <>
       <MobileBar trigger={triggerBar}>
        <Close onClick={()=>{
          settriggerBar(!triggerBar);
        }}/>
        <MobileNavMenu>
          <NavLink to='/EasyBank-Landing-Page/' activeStyle>
            Home
          </NavLink>
          <NavLink to='#' activeStyle>
            About
          </NavLink>
          <NavLink to='/EasyBank-Landing-Page/contact' activeStyle>
            Contact
          </NavLink>
          <NavLink to='#' activeStyle>
            Blog
          </NavLink>
          <NavLink to='#' activeStyle>
            Carrier
          </NavLink>
        </MobileNavMenu>
        </MobileBar>
      <Nav>
        <ImageContainer trigger={triggerBar}>
        <img src={logo} alt="Logo EasyBank Site"/>
        </ImageContainer>
        <Bars trigger={triggerBar} onClick={()=>{
          settriggerBar(!triggerBar);
        }}/>
        <NavMenu>
          <NavLink to='/EasyBank-Landing-Page/' activeStyle>
            Home
          </NavLink>
          <NavLink to='#' activeStyle>
            About
          </NavLink>
          <NavLink to='/EasyBank-Landing-Page/contact' activeStyle>
            Contact
          </NavLink>
          <NavLink to='#' activeStyle>
            Blog
          </NavLink>
          <NavLink to='#' activeStyle>
            Carrier
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='#'>Request Invite</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;