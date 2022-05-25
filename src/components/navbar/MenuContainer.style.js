import styled from 'styled-components';

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    margin-left: 3rem;

    li {
        margin-right: 1.5rem;
        color: var(--gray);
        cursor: pointer;
        display: flex;
        user-select: none;
        position: relative;

        .dropdown {
            display: flex;
            align-items: center;

            p {
                align-self: flex-start;
            }
        }

        img {
            width: 13px;
            margin-left: 7px;
        }
        .nav-link:hover {
            color: var(--black);
        }
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
