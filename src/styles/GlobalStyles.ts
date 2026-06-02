import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.typography.fontFamily};
    background-color: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.dark};
  }

  a {
    color: ${props => props.theme.colors.light};
    text-decoration: none;
  }
`;

export default GlobalStyles;