import WeatherIcon from './WeatherIcon';
import type { Place } from '@/lib/types';

export default function CurrentCard({ data, place }: { data: any; place: Place }) {
  const current = data.current_weather;
  const dateStr = new Date(data.current_weather.time).toLocaleDateString(undefined, { weekday:'long', month:'short', day:'numeric', year:'numeric' });
  return (
    <div className="hero-grad card p-6 flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1 text-left">
        <div className="text-white text-xl font-semibold">{place.name}{place.admin1 ? ', '+place.admin1 : ''}</div>
        <div className="text-slate-200 mt-1">{dateStr}</div>
      </div>
      <div className="flex items-center gap-6">
        <WeatherIcon code={current.weathercode} size={64} />
        <div className="text-6xl font-bold">{Math.round(current.temperature)}°</div>
      </div>
    </div>
  );
}
