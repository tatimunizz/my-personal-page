import styled from "styled-components";

export const StyledWeatherWidget = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  // justify-content: space-between;
  gap: 20px;
`

export const WeatherIcon = styled.div`
  width: 72px,
  height: 72px;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`

export const DisplayText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Temperature = styled.div`
  font-size: 48px;
`