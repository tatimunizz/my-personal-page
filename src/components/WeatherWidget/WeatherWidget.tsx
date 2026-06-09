import { Widget } from "@components/common/Widget/Widget";
import { useWeather } from "./hooks/useWeather";
import { PxlKitIcon } from "@pxlkit/core";
import { Cloud, CloudSun, Rain, Snow, Sun, Thunder } from "@pxlkit/weather";
import { useTheme } from "@/providers/ThemeProvider";
import { DisplayText, StyledWeatherWidget, Temperature, WeatherIcon } from "./WeatherWidget.styles";

export function WeatherWidget() {
  const { temperature, weatherCode, city, country, loading, error } = useWeather();
  
  const {theme} = useTheme();
  const getWeatherIcon = (size: number) => {
    if (weatherCode === 0) return <PxlKitIcon icon={Sun} size={size} appearance="solid" color={theme.colors.dark} />
    if (weatherCode === 1 || weatherCode === 2) return <PxlKitIcon icon={CloudSun} size={size} appearance="solid" color={theme.colors.dark} />
    if (weatherCode === 3 || (weatherCode >= 45 && weatherCode <= 48)) return <PxlKitIcon icon={Cloud} size={size} appearance="solid" color={theme.colors.dark}/>
    if (weatherCode >= 51 && weatherCode <= 67) return <PxlKitIcon icon={Rain} size={size} appearance="solid" color={theme.colors.dark} />
    if (weatherCode >= 71 && weatherCode <= 86) return <PxlKitIcon icon={Snow} size={size} appearance="solid" color={theme.colors.dark} />
    if (weatherCode >= 95 && weatherCode <= 99) return <PxlKitIcon icon={Thunder} size={size} appearance="solid" color={theme.colors.dark} />
    return <PxlKitIcon icon={Sun} size={size} appearance="solid" color={theme.colors.dark} />
  }
  
  if (loading) return <Widget>Loading weather...</Widget>;
  if (error) return <Widget>Error: {error}</Widget>;

  

  return(
    <Widget>
      <StyledWeatherWidget>
        <WeatherIcon>{getWeatherIcon(72)}</WeatherIcon>
        <DisplayText>
          <Temperature>{Math.round(temperature)}°C</Temperature>
          {city}, {country}
        </DisplayText>
      </StyledWeatherWidget>
  </Widget>
  );
}