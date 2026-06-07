import { weatherAPI } from "@apis/openmeteo";
import { getLocationByIp } from "@apis/iplocation";
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

async function reverseGeocode(lat: number, lon: number) {
  const response = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
  );
  const data = await response.json();
  return {
    city: data.city || data.locality || "Unknown",
    country: data.countryName || "Unknown",
  };
}

const getBrowserLocation = (): Promise<{lat: number; long: number}> => {
  return new Promise((resolve, reject) => {
    if(!navigator.geolocation) {
      reject(new Error ("Geolocation is not supported by this browser."));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude} = position.coords;
        resolve({lat: latitude, long: longitude});
      },
      (error) => {
        reject(error);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  });
};

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
      
      let location: { lat: number; lon: number; city?: string; country?: string } | null = null;
  
      const ipLocation = await getLocationByIp();
        if (ipLocation && ipLocation.loc) {
          const [lat, lon] = ipLocation.loc.split(',').map(Number);

          if (!isNaN(lat) && !isNaN(lon)) {
          location = {
            lat,
            lon,
            city: ipLocation.city,
            country: ipLocation.country,
          };
        }
      }

      if (!location) {
        try {
          const browserLoc = await getBrowserLocation();
          const { city, country} = await reverseGeocode(browserLoc.lat, browserLoc.long);

          location = {
            lat: browserLoc.lat,
            lon: browserLoc.long,
            city,
            country,
          };
        } catch(e) {
          console.log("Browser geolocation error: ", e);
          setWeather(prev => ({
            ...prev,
            loading: false,
            error: "Unable to get your location. Please allow location access or check your network.",
          }));
          return;
        }
      }

      try {
        const weatherResponse = await weatherAPI({lat: location.lat, lon: location.lon});

        const { temperature, humidity, weatherCode } = weatherResponse;

        setWeather({
          temperature,
          humidity,
          weatherCode,
          city: location.city || "unknown",
          country: location.country || "unknown",
          loading: false,
          error: null,
        });
      } catch (e) {
        console.log("Weather API error: ", e);
        setWeather(prev => ({ ...prev, loading: false, error: 'Failed to fetch weather data.' }));
      }
    }

    fetchWeather();
  }, []);

  return weather;
}
