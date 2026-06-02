
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 72px;
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
`

export const FooterCredit = styled.div`
  text-align: right;
`