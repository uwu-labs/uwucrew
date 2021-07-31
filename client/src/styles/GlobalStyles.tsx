import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
	    --text-primary: #333;
        --bg: white;
        --bg-01: #c27797;
        --bg-02: #4c96b2;
        --bg-03: #d2ab74;
        --bg-04: #c85e75;
        --bg-05: #427e95;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: var(--text-primary);
        font-family: 'Baloo Chettan 2', cursive;
        font-size: 10px;
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
