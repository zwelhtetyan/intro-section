import React from 'react';
import { MobileMenu } from './MobileMenu.style';
import { MobileMenuIcon } from '../navbar/Navbar.style';
import menuClose from '../../images/icon-close-menu.svg';
import MenuContainer from '../navbar/MenuContainer';
import Login from '../navbar/Login';

const MobileMenuContainer = ({ menuToggler }) => {
    return (
        <MobileMenu>
            <MobileMenuIcon onClick={menuToggler}>
                <img src={menuClose} alt='' />
            </MobileMenuIcon>
            <MenuContainer menuToggler={menuToggler} />
            <Login />
        </MobileMenu>
    );
};

export default MobileMenuContainer;
