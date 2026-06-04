import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Ubuntu Mono', sans-serif;
    font-size: ${prop => prop.theme.typography.fontSize.small};
    background-color: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.dark};
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: ${prop => prop.theme.typography.fontSize.xsmall};
    }
  }

  a {
    color: ${props => props.theme.colors.light};
    text-decoration: none;
  }

  a:Hover {
    color: ${props => props.theme.colors.secondaryDark};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-size: 100%;
    font-weight: normal;
    line-height: 1.2;
  }

`;

export default GlobalStyles;