import styled from "styled-components";

export const Audio = styled.audio`
  display: none;
`

export const StyledMusicPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`

export const PlayerDisplay = styled.div`
  display: flex;
  flex-direction: column;
  height: 48px;
  justify-content: space-between;
  flex: 1;
  min-width: 0;
`

export const PlayerContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: 0; 
`

export const TrackTitle = styled.div`
  width: 100%;
`

export const SeekBar = styled.input.attrs({ type: 'range'})`
  width: 100%;
  height: 4px;
  -webkit-appearance: none;
  outline: none;
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

export const TrackDuration = styled.div`
  font-size: ${props => props.theme.typography.fontSize.xxsmall};
`

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

// export const VolumeContainerHover = styled(VolumeContainer)`
//   &:hover ${VolumeBarWrapper} {
//     width: 84px;
//     opacity: 1;
//     pointer-events: auto;   /* permite interagir com a barra */
//   }
// `

export const PlaylistAccordion = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  // gap: 24px;
  // padding: 0px 20px;
  // padding-bottom: ${props => props.$isOpen ? '20px' : '0px'};

  // background-color: ${props => props.theme.colors.light};
  // border: 2px solid ${props => props.theme.colors.dark};
  // box-shadow: 8px 8px 0px ${props => props.theme.colors.dark};
  transition: all 0.3s ease;
`;

export const PlaylistButton = styled.div<{$isOpen: boolean}>`
  display: flex;
  justify-content: space-between;
  // background-color: ${props => props.theme.colors.light};
  width: 100%;
  padding-top: 8px;
  align-items: center;
  // border-bottom: ${props => props.$isOpen ? '2px solid ' + props.theme.colors.dark : 'none'};
  box-shaddow: none;
`

export const Toggle = styled.div<{$isOpen: boolean}>`
  transform: rotate(${props => props.$isOpen ? '180deg' : '0deg'});
  transition: transform 0.2s ease;
  display: inline-flex;
  align-items: center;
`

export const Playlist = styled.div<{$isOpen: boolean}>`
  display: ${props => props.$isOpen ? 'flex' : 'none'};
`

export const TrackList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 8px 0;
`;

export const TrackItem = styled.li<{ $isActive: boolean }>`
  padding: 8px;
  margin: 4px 0;
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.medium : props.theme.colors.light};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryLight};
  }
`;