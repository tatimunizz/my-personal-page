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

export const TrackDuration = styled.div`
  font-size: ${props => props.theme.typography.fontSize.xxsmall};
`
