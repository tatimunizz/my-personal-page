import styled from "styled-components"

export const VolumeContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`

export const VolumeBarWrapper = styled.div`
  position: absolute;
  right: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  overflow: hidden;
  transition: width 0.2s ease;
  background-color: ${props => props.theme.colors.light};
  // padding: 8px;
  display: flex;
  align-items: center;
  padding: 8px 0;
`

export const VolumeBar = styled.input.attrs({ type: 'range'})`
  width: 0;
  opacity: 0;
  transition: width 0.2s ease, opacity 0.2s ease;
  height: 4px;
  -webkit-appearance: none;
  outline: none;
  pointer-events: none;
  background-color: ${props => props.theme.colors.medium}
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    background: ${props => props.theme.colors.dark};
    cursor: pointer;
    border: none;
    border-radius: 0px;
  }

  /* Firefox */
  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background: ${props => props.theme.colors.dark};
    cursor: pointer;
    border: none;
    border-radius: 0px;
  }
`

export const VolumeControl = styled(VolumeContainer)`
  &:hover ${VolumeBarWrapper} {
    width: 100px;
    padding: 8px;
  } 
  &:hover ${VolumeBar} {
    width: 84px;
    opacity: 1;
    pointer-events: auto;
  }
`
