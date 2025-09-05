'use client';
import { useUnits } from '@/context/UnitsContext';

export default function UnitToggle() {
  const { units, setUnits } = useUnits();
  return (
    <div className="flex gap-3 items-center">
      <select value={units.temperature} onChange={(e)=>setUnits({...units, temperature: e.target.value as any})} className="bg-slate-800/60 rounded-md px-3 py-2">
        <option value="celsius">°C</option>
        <option value="fahrenheit">°F</option>
      </select>
      <select value={units.wind} onChange={(e)=>setUnits({...units, wind: e.target.value as any})} className="bg-slate-800/60 rounded-md px-3 py-2">
        <option value="kmh">km/h</option>
        <option value="mph">mph</option>
      </select>
      <select value={units.precip} onChange={(e)=>setUnits({...units, precip: e.target.value as any})} className="bg-slate-800/60 rounded-md px-3 py-2">
        <option value="mm">mm</option>
        <option value="inch">inch</option>
      </select>
    </div>
  );
}
