import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1; 
  padding: ${props => props.theme.global.padding};
  display: flex;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.global.xpadding};
    flex-direction: column;
  }

  @media (min-width: 1700px) {
    padding: 32px 20%;
  }
`;