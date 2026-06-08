import styled from "styled-components";


export const LargeIcon = styled.div<{size?: number}>`
  width: ${props => props.size ? String(props.size) : '48' }px;
  height: ${props => props.size ? String(props.size) : '48' }px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
  width: ${props => props.size ? String(props.size) : '32' }px;
  height: ${props => props.size ? String(props.size) : '32' }px;

  }
`