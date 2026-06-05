import { fetchWeatherApi } from "openmeteo";

interface WeatherAPIProps {
  lat: number;
  lon: number;
}

export async function weatherAPI({ lat, lon }: WeatherAPIProps) {
const params = {
	latitude: lat,
	longitude: lon,
	current: ["temperature_2m", "relative_humidity_2m", "weather_code"],
	timezone: "auto",
	forecast_days: 1,
};

const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

const utcOffsetSeconds = response.utcOffsetSeconds();

const current = response.current()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
const weatherData = {
	current: {
		time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
		temperature_2m: current.variables(0)!.value(),
		relative_humidity_2m: current.variables(1)!.value(),
		weather_code: current.variables(2)!.value(),
	},
};

return {
  temperature: weatherData.current.temperature_2m,
  humidity: weatherData.current.relative_humidity_2m,
  weatherCode: weatherData.current.weather_code
}

}