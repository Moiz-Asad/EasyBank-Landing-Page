import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  ImageContainer
} from './NavElements';
import logo from '../Assets/logo.svg';

const Navbar = () => {
  return (
      <>
      <Nav>
        <ImageContainer>
        <img src={logo} alt="Logo EasyBank Site"/>
        </ImageContainer>

        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='#' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact' activeStyle>
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