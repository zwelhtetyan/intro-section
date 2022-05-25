import styled from 'styled-components';

export const MobileMenu = styled.div`
    width: 250px;
    height: 100vh;
    background: var(--white);
    position: fixed;
    top: 0;
    transition: all 0.3s linear;
    padding: 2rem;
    z-index: 2;
    right: ${({ theme }) => theme.right};

    div:first-child {
        margin: 0.5rem 0.5rem 0 0;
    }

    ul {
        flex-direction: column;
        align-items: flex-start;
        margin: 1rem 0 0 0;

        li {
            margin-bottom: 1.2rem;
            @media screen and (max-width: 768px) {
                display: flex;
                flex-direction: column;
            }
        }

        .feature {
            transform: translateY(8px);
        }

        @media screen and (max-width: 768px) {
            display: flex;
        }
    }

    & > :last-child {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0.5rem 0 0 0;
        text-align: center;
        p {
            margin-bottom: 1rem;
        }
        button {
            margin: 0;
            width: 100%;
        }
    }

    @media screen and (max-width: 480px) {
        width: 55%;
        padding: 1rem;

        ul {
            margin: 1rem 0 0 1rem;
        }

        & > :last-child {
            margin: 0 0 0 1rem;
        }
    }
`;
