import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100vw;
    padding: 2rem 5rem;
    display: flex;
    align-items: center;
    height: calc(100vh - 69px);

    @media screen and (max-width: 1000px) {
        padding: 2rem 3rem;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        height: auto;
    }

    @media screen and (max-width: 480px) {
        padding: 2rem 1rem;
    }
`;

export const HomeLeft = styled.div`
    flex: 1;

    h1 {
        font-size: 4.5rem;
        span {
            display: block;
        }
    }

    p {
        color: var(--gray);
        margin: 2rem 0;
    }

    button {
        width: 130px;
        height: 43px;

        @media screen and (max-width: 768px) {

            display: block;
            margin: 0 auto;
        }
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        h1 {
            font-size: 2rem;
            text-align: center;
        }
    }
`;

export const HomeRight = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 2rem;
    img {
        width: 70%;
    }

    @media screen and (max-width: 1000px) {
        img {
            width: 100%;
        }
    }

    @media screen and (max-width: 768px) {
        margin-left: 0;

        img {
            width: 90%;
            margin-bottom: 3rem;
        }
    }
`;
