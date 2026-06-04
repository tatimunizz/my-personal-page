import styled from "styled-components";

export const StyledPaintCanvas= styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
`

export const Canvas = styled.canvas`
  width: 100%;
  height: auto;
  image-rendering: crisp-edges; 
  image-rendering: pixelated;
  border: 1px solid ${props => props.theme.colors.light};
  cursor: crosshair;

  touch-action: none;
`

export const CanvasTools = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`

export const IconButton = styled.button<{active?: boolean}>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.active ? props.theme.colors.medium : props.theme.colors.dark};
  opacity: ${props => props.active ? 1 : 0.7};
  transition: all 0.2s;
  &:hover {
    opacity: 1;
    color: ${props => props.theme.colors.medium};
  }
`