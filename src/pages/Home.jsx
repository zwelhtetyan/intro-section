import React, { useEffect, useState } from 'react';
import Brands from '../components/brands/Brands';
import { Button } from '../components/navbar/Login.style';
import { HomeContainer, HomeLeft, HomeRight } from './Home.style';
import desktopImg from '../images/image-hero-desktop.png';
import mobileImg from '../images/image-hero-mobile.png';

const Home = () => {
    const isMobileScreen = (_) => {
        return window.innerWidth <= 768;
    };

    const [mobileScreen, setMobileScreen] = useState(isMobileScreen);

    useEffect(() => {
        const hadleResize = () => {
            setMobileScreen(window.innerWidth <= 768);
        };

        window.addEventListener('resize', hadleResize);

        return () => window.removeEventListener('resize', hadleResize);
    }, []);

    return (
        <HomeContainer>
            <HomeLeft>
                <h1>Make remote work</h1>
                <p>
                    Get your team in sync, no matter your location. Streamline
                    processes, create team rituals, and watch productivity soar.
                </p>
                <Button>Learn more</Button>
                <Brands />
            </HomeLeft>
            <HomeRight>
                <img src={mobileScreen ? mobileImg : desktopImg} alt='' />
            </HomeRight>
        </HomeContainer>
    );
};

export default Home;
