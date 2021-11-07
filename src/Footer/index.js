import React from 'react';
import {NavLink,NavMenu,FooterContainer,SocialIcon,Sec1,Imag,Sec2, NavBtnLink,Sec3,Copy} from './FotterElements';

function Footer() {
    return (
        <FooterContainer>
            <Sec1>
            <img src={require('../Assets/logolight.svg').default} alt="Logo SVG"/>
            <SocialIcon>
                <Imag src={require('../Assets/icon-facebook.svg').default } alt="Facebook Icon"/>
                <Imag src={require('../Assets/icon-youtube.svg').default } alt="Youtube Icon"/> 
                <Imag src={require('../Assets/icon-instagram.svg').default } alt="Instagram Icon"/>
                <Imag src={require('../Assets/icon-twitter.svg').default } alt="Twitter Icon"/>
                <Imag src={require('../Assets/icon-pinterest.svg').default } alt="Pinterest Icon"/>
            </SocialIcon>
            </Sec1>
            <Sec2>
                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About Us
                    </NavLink>
                    <NavLink to='/contact' activeStyle>
                        Contact
                    </NavLink>
                    <NavLink to='/blog' activeStyle>
                        Blog
                    </NavLink>
                    <NavLink to='/carrier' activeStyle>
                        Carrier
                    </NavLink>
                    <NavLink to='#' activeStyle>
                        Support
                    </NavLink>
                    <NavLink to='#' activeStyle>
                        Privacy Policy
                    </NavLink>
                </NavMenu>
            </Sec2>
            <Sec3>
                <NavBtnLink to='#'>Request Invite</NavBtnLink>
                <Copy>&copy; Easybank. All Rights Reserved</Copy>
            </Sec3>
        </FooterContainer>
    )
}

export default Footer;
