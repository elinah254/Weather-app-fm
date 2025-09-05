export type Units = {
  temperature: 'celsius' | 'fahrenheit',
  wind: 'kmh' | 'mph',
  precip: 'mm' | 'inch'
}

export type Place = {
  name: string;
  country?: string;
  admin1?: string;
  latitude: number;
  longitude: number;
  timezone?: string;
}
