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
