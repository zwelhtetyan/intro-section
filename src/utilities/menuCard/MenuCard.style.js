import styled from 'styled-components';
import { keyframes } from 'styled-components';

const animateMenuCard = keyframes`
    from {
        transform: translateY(-10px);
    }
    to {
        transform: translateY(0px);
    }
`;

export const FutureMenuCardContainer = styled.div`
    position: absolute;
    top: 10px;
    left: -30px;
    padding: 0 1rem;
    margin-top: 0.5rem;
    animation: ${animateMenuCard} 0.2s linear;
    animation-fill-mode: forwards;
    background-color: var(--white);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    p {
        display: flex;
        align-items: center;
        margin: 1rem 0;
        font-size: 15px;

        img {
            margin-right: 0.5rem;
        }

        &:hover {
            color: var(--black);
        }
    }

    @media screen and (max-width: 768px) {
        box-shadow: none;
        position: unset;
        margin-left: 0.4rem;
        padding: 0;
        margin-top: 0;
    }
`;

export const CompanyMenuCardContainer = styled(FutureMenuCardContainer)`
    left: -15px;
    width: 120px;
`;
