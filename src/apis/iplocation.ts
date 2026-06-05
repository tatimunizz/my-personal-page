export interface IpLocationData {
  city: string;
  region: string;
  country: string;
  loc: string;
}

export async function getLocationByIp(): Promise<IpLocationData | null> {
  try {
    const response = await fetch('http://ip-api.com/json/?fields=status,message,city,region,country,lat,lon');
    const data = await response.json();
    
    if (data.status === 'success') {
      return {
        city: data.city,
        region: data.region,
        country: data.country,
        loc: `${data.lat},${data.lon}`
      };
    } else {
      console.error('IP Geolocation failed:', data.message);
      return null;
    }
  } catch (error) {
    console.error('Error fetching IP location:', error);
    return null;
  }
}