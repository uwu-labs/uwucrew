import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
	    --text-primary: #222222;
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
