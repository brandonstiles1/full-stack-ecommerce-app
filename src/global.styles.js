import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body { 
    font-family: 'Open Sans Condensed';
    padding: 20px 40px;

    @media sceeen and (max-width: 800px){
       padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;