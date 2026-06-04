
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.global.padding};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.global.xpadding};
  }
`

export const FooterNote = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;

  span {
    font-size: ${props => props.theme.typography.fontSize.medium};
  }

  p {
    font-size: ${props => props.theme.typography.fontSize.small};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    span {
      font-size: ${props => props.theme.typography.fontSize.small};
    }

    p {
      font-size: ${props => props.theme.typography.fontSize.xsmall};
    }
  }
`

export const FooterCredit = styled.div`
  text-align: right;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${prop => prop.theme.typography.fontSize.xxsmall};
  }
`