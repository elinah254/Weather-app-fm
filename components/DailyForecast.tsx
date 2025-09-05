import WeatherIcon from './WeatherIcon';
export default function DailyForecast({ data, onSelect, selected }: { data: any; onSelect: (i:number)=>void; selected: number }) {
  return (
    <div>
      <h3 className="text-white font-semibold mb-3">Daily forecast</h3>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {data.daily.time.map((d:string,i:number)=>(
          <button key={i} onClick={()=>onSelect(i)} className={`min-w-[90px] p-3 rounded-lg border ${i===selected ? 'bg-indigo-700/30 border-indigo-400' : 'bg-slate-900/40 border-slate-800'}`}>
            <div className="text-xs opacity-70">{new Date(d).toLocaleDateString(undefined,{weekday:'short'})}</div>
            <div className="mt-2 flex items-center gap-2">
              <WeatherIcon code={data.daily.weathercode[i]} size={24} />
              <div className="text-sm">
                <div className="font-medium">{Math.round(data.daily.temperature_2m_max[i])}°</div>
                <div className="text-xs opacity-70">{Math.round(data.daily.temperature_2m_min[i])}°</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
