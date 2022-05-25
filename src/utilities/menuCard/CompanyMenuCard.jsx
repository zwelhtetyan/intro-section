import React from 'react';
import { CompanyMenuCardContainer } from './MenuCard.style';

const CompanyMenuCard = ({ menuToggler }) => {
    return (
        <CompanyMenuCardContainer>
            <p onClick={menuToggler}>History</p>
            <p onClick={menuToggler}>Our Team</p>
            <p onClick={menuToggler}>Blog</p>
        </CompanyMenuCardContainer>
    );
};

export default CompanyMenuCard;
