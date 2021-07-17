import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
	    --text-primary: #222222;
        --bg-01: #C9F2C5;
        --bg-02: #C4D5FD;
        --bg-03: #FFFEE3;
        --bg-04: #C9F4FE;
        --bg-05: #FDD4F0;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: var(--text-primary);
	    font-family: 'Roboto', sans-serif;
    }

    button {
        background: none;
        border: none;
        outline: none;
    }
    
    input {
        border: none;
        outline: none;
    }

    a {
        text-decoration: none;
    }
`;

const GlobalStyles = (): JSX.Element => {
	return <GlobalStyle />;
};

export default GlobalStyles;
