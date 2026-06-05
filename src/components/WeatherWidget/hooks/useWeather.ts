import { weatherAPI } from "@apis/openmeteo";
import { getLocationByIp } from "@apis/iplocation";
import { reverseGeocodeNominatim } from "quick-geocode";
import { useState, useEffect } from "react";

interface WeatherData {
  temperature: number;
  humidity: number;
  weatherCode: number;
  city: string;
  country: string;
  loading: boolean;
  error: string | null;
}

export function useWeather(): WeatherData {
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 0,
    humidity: 0,
    weatherCode: 0,
    city: "",
    country: "",
    loading: true,
    error: null,
  });

  useEffect(() => {
    async function fetchWeather() {
      setWeather(prev => ({ ...prev, loading: true, error: null }));
      const ipLocation = await getLocationByIp();
      if (!ipLocation) {
        setWeather(prev => ({ ...prev, loading: false, error: 'Não foi possível obter sua localização.' }));
        return;
      }
      const [latitude, longitude] = ipLocation.loc.split(',').map(Number);
      try {
        const weatherResponse = await weatherAPI({lat: latitude, lon: longitude});

        const { temperature, humidity, weatherCode } = weatherResponse;

        setWeather({
          temperature,
          humidity,
          weatherCode,
          city: ipLocation.city,
          country: ipLocation.country,
          loading: false,
          error: null,
        });
      } catch (e) {
        console.log(e);
        setWeather(prev => ({ ...prev, loading: false, error: 'Falha ao obter dados do clima.' }));
      }
    }
    fetchWeather();
  }, []);
  return weather;
}
