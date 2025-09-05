export default function MetricsGrid({ data }: { data: any }) {
  const current = data.current_weather;
  const idx = data.hourly.time.findIndex((t:string)=>t===current.time) ?? 0;
  const feels = data.hourly.apparent_temperature ? Math.round(data.hourly.apparent_temperature[idx]) : Math.round(current.temperature);
  const humidity = data.hourly.relative_humidity_2m ? data.hourly.relative_humidity_2m[idx] : '—';
  const wind = current.windspeed;
  const precip = data.hourly.precipitation ? data.hourly.precipitation[idx] : 0;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <Card label="Feels Like" value={`${feels}°`} />
      <Card label="Humidity" value={`${humidity}%`} />
      <Card label="Wind" value={`${wind} ${data.hourly_units?.wind_speed_10m ?? 'km/h'}`} />
      <Card label="Precipitation" value={`${precip} ${data.hourly_units?.precipitation ?? 'mm'}`} />
    </div>
  );
}

function Card({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800">
      <div className="text-xs opacity-70">{label}</div>
      <div className="text-xl font-semibold mt-2">{value}</div>
    </div>
  );
}
