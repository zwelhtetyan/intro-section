import React, { useState } from 'react';
import arrowDown from '../../images/icon-arrow-down.svg';
import arrowUp from '../../images/icon-arrow-up.svg';
import CompanyMenuCard from '../../utilities/menuCard/CompanyMenuCard';
import FutureMenuCard from '../../utilities/menuCard/FutureMenuCard';
import { Ul } from './MenuContainer.style';

const MenuContainer = ({ menuToggler }) => {
    const [isFutureMenuOpen, setIsFutureMenuOpen] = useState(false);
    const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);

    const mediumScreen = () => {
        return window.innerWidth <= 768;
    };

    const handleFeatureMenuOpen = () => {
        !mediumScreen() && setIsFutureMenuOpen((isOpen) => !isOpen);
    };

    const handleCompanyMenuOpen = () => {
        !mediumScreen() && setIsCompanyMenuOpen((isOpen) => !isOpen);
    };

    const handleFeatureMenuMobile = () => {
        mediumScreen() && setIsFutureMenuOpen((isOpen) => !isOpen);
    };

    const handleCompanyMenuMobile = () => {
        mediumScreen() && setIsCompanyMenuOpen((isOpen) => !isOpen);
    };

    return (
        <Ul>
            <li
                className='feature'
                onMouseEnter={handleFeatureMenuOpen}
                onMouseLeave={handleFeatureMenuOpen}
                onClick={handleFeatureMenuMobile}
                style={{
                    marginBottom: mediumScreen() && isFutureMenuOpen && 0,
                }}
            >
                <div className='dropdown'>
                    <p className='nav-link'>Features</p>
                    <img src={isFutureMenuOpen ? arrowUp : arrowDown} alt='' />
                </div>
                {isFutureMenuOpen && (
                    <FutureMenuCard menuToggler={menuToggler} />
                )}
            </li>
            <li
                onMouseEnter={handleCompanyMenuOpen}
                onMouseLeave={handleCompanyMenuOpen}
                onClick={handleCompanyMenuMobile}
                style={{
                    marginBottom: mediumScreen() && isCompanyMenuOpen && 0,
                }}
            >
                <div className='dropdown'>
                    <p className='nav-link'>Company</p>
                    <img src={isCompanyMenuOpen ? arrowUp : arrowDown} alt='' />
                </div>
                {isCompanyMenuOpen && (
                    <CompanyMenuCard menuToggler={menuToggler} />
                )}
            </li>
            <li onClick={menuToggler}>
                <p className='nav-link'>Careers</p>
            </li>
            <li onClick={menuToggler}>
                <p className='nav-link'>About</p>
            </li>
        </Ul>
    );
};

export default MenuContainer;
