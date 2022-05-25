import { css } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`${css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Epilogue', sans-serif;
    }

    :root {
        --white: hsl(0, 0%, 98%);
        --gray: hsl(0, 0%, 41%);
        --black: hsl(0, 0%, 8%);
    }
`}`;

export default GlobalStyles;
