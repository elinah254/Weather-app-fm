export default function HourlyPanel({ data, indices }: { data: any; indices: number[] }) {
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="text-white font-semibold">Hourly forecast</div>
        <select className="bg-slate-800/60 rounded-md px-3 py-1 text-sm">
          <option>Tuesday</option>
        </select>
      </div>
      <div className="space-y-3">
        {indices.map(i => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-900/30 border border-slate-800">
            <div className="flex items-center gap-3">
              <div className="text-xs opacity-70">{new Date(data.hourly.time[i]).toLocaleTimeString([], {hour: '2-digit'})}</div>
              <div className="text-sm opacity-80">{Math.round(data.hourly.temperature_2m[i])}°</div>
            </div>
            <div className="text-sm opacity-70">{data.hourly_units?.temperature_2m ?? '°C'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
