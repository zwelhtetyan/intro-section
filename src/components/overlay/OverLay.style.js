import styled from 'styled-components';

export const OverlayContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    transition: all 0.1s linear;
    background-color: ${({ theme }) => theme.overlayBg};
`;
