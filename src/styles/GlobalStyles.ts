import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Ubuntu Mono', sans-serif;
    background-color: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.dark};
    
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

  main {
    padding: 32px 72px;
    display: flex;
    justify-content: space-between;
  }
`;

export default GlobalStyles;