import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 200px;
    padding: 0 8rem;
    background: hsl(233, 26%, 24%);

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding 2rem 0;
        height: auto;
      }

`
export const Sec1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 10%;
`
export const Imag = styled.img`
    cursor: pointer;
    width: 20px;
    margin-right: 0.5rem;
`
export const SocialIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 2rem 0;
`

export const Sec2 = styled.div`
    color: white;
    width:50%;
`
export const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    cursor: pointer;
    font-size: 20px;
    @media screen and (max-width: 970px) {
        margin: 0.5rem;
        font-size: 18px;
    }
    @media screen and (max-width: 680px) {
        font-size: 15px;
        margin: 0.5rem;
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
export const NavMenu = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 3rem;
    height: 100px;
    padding-top: 3rem;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding 2rem 0;
        height: auto;
      }
`
export const Copy = styled.p`
    color: darkgray;
`
export const Sec3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: inherit;
    justify-content: center;
`
