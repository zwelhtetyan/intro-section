import React from 'react';
import logo from '../../images/logo.svg';
import menuOpen from '../../images/icon-menu.svg';
import { LogoAndMenu, MobileMenuIcon, Nav } from './Navbar.style';
import { NavContainer } from '../../utilities/Container.style';
import MenuContainer from './MenuContainer';
import Login from './Login';

const Navbar = ({ menuToggler }) => {
    return (
        <NavContainer>
            <Nav>
                <LogoAndMenu>
                    <img src={logo} alt='' />
                    <MenuContainer menuToggler={menuToggler} />
                </LogoAndMenu>
                <Login />
                <MobileMenuIcon onClick={menuToggler}>
                    <img src={menuOpen} alt='' />
                </MobileMenuIcon>
            </Nav>
        </NavContainer>
    );
};

export default Navbar;
