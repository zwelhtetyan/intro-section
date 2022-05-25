import styled from 'styled-components';

export const Nav = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--white);
`;

export const LogoAndMenu = styled.div`
    display: flex;
    align-items: center;
`;

export const MobileMenuIcon = styled.div`
    display: none;
    margin-left: auto;
    cursor: pointer;
    justify-content: flex-end;

    @media screen and (max-width: 768px) {
        display: flex;
    }
`;
