import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;

    p {
        cursor: pointer;
        color: var(--gray);
        &:hover {
            color: var(--black);
        }
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Button = styled.button`
    border: 1px solid var(--gray);
    outline: none;
    display: flex;
    align-items: center;
    width: 95px;
    height: 37px;
    border-radius: 14px;
    justify-content: center;
    font-size: 15px;
    margin-left: 1.5rem;
    cursor: pointer;
    color: var(--gray);
    background-color: transparent;

    &:hover {
        border-color: var(--black);
        color: var(--black);

        @media screen and (max-width: 768px) {
            color: var(--white);
        }
    }

    @media screen and (max-width: 768px) {
        background-color: var(--black);
        color: var(--white);
    }
`;
