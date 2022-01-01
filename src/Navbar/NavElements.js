import { FaBars, FaArrowAltCircleLeft } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav`
  background-color: "white";
  display: flex;
  justify-content: space-between;
  padding: 2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  background-color: white;
`;
  
export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: ${props => props.trigger === true? "none":"flex"};
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
  
export const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: hsl(136, 65%, 51%);
  padding: 10px 22px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`
export const ImageContainer = styled.div`
  display: ${props => props.trigger === true? "none":"flex"};
  justify-content: center;
  align-items: center;
  padding-left: 1.5rem;
`

export const MobileBar = styled.div`
  display: none;
  background-color: white;
  @media screen and (max-width: 768px) {
    display: ${props => props.trigger === true? "flex":"none"};
    width: 100%;
    z-index: 20000;
    padding: 0;
    margin: 0;
  }
`
export const MobileNavMenu = styled.div`
  display: flex:
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 20000; 
  background-color: white;
  @media screen and (min-width: 768px) {
    display:none;
  }
`
export const Close = styled(FaArrowAltCircleLeft)`
  padding: auto;
`