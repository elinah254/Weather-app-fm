import { Units, Place } from './types';
const GEOCODE = 'https://geocoding-api.open-meteo.com/v1/search';
const FORECAST = 'https://api.open-meteo.com/v1/forecast';

export async function geocode(q: string) {
  const u = new URL(GEOCODE);
  u.searchParams.set('name', q);
  u.searchParams.set('count', '6');
  u.searchParams.set('language', 'en');
  const res = await fetch(u.toString());
  if (!res.ok) throw new Error('Geocode failed');
  const data = await res.json();
  return (data.results || []);
}

export async function getWeather(place: Place, units: Units) {
  const u = new URL(FORECAST);
  u.searchParams.set('latitude', String(place.latitude));
  u.searchParams.set('longitude', String(place.longitude));
  u.searchParams.set('timezone', 'auto');
  u.searchParams.set('current_weather','true');
  u.searchParams.set('temperature_unit', units.temperature);
  u.searchParams.set('wind_speed_unit', units.wind);
  u.searchParams.set('precipitation_unit', units.precip);
  u.searchParams.set('hourly', ['temperature_2m','apparent_temperature','relative_humidity_2m','precipitation','wind_speed_10m','weathercode'].join(','));
  u.searchParams.set('daily', ['temperature_2m_max','temperature_2m_min','weathercode','precipitation_sum'].join(','));
  const res = await fetch(u.toString(), { cache: 'no-store' });
  if (!res.ok) throw new Error('Weather fetch failed');
  return await res.json();
}
