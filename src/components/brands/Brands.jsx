import React from 'react';
import { BrandContainer } from './Brands.style';
import brand1 from '../../images/client-databiz.svg';
import brand2 from '../../images/client-audiophile.svg';
import brand3 from '../../images/client-meet.svg';
import brand4 from '../../images/client-maker.svg';

const Brands = () => {
    return (
        <BrandContainer>
            <img src={brand1} alt='' />
            <img src={brand2} alt='' />
            <img src={brand3} alt='' />
            <img src={brand4} alt='' />
        </BrandContainer>
    );
};

export default Brands;
