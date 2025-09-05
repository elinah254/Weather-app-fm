'use client';
import { useState } from 'react';
import { geocode } from '@/lib/api';
import type { Place } from '@/lib/types';

export default function SearchBar({ onSelect }: { onSelect: (p: Place)=>void }) {
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  async function handleSearch() {
    if (!q.trim()) return;
    setLoading(true);
    try {
      const res = await geocode(q.trim());
      setResults(res);
    } catch (e) {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex gap-3">
        <input
          value={q}
          onChange={(e)=>setQ(e.target.value)}
          onKeyDown={(e)=> e.key==='Enter' && handleSearch()}
          placeholder="Search for a city..."
          className="flex-1 rounded-lg px-4 py-3 bg-slate-800/60 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button onClick={handleSearch} className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500">Search</button>
      </div>
      {results.length>0 && (
        <ul className="bg-slate-900/40 rounded-lg p-2 divide-y divide-slate-800">
          {results.map((r,i)=>(
            <li key={i}>
              <button onClick={()=>onSelect({ name: r.name, country: r.country, admin1: r.admin1, latitude: r.latitude, longitude: r.longitude })} className="w-full text-left px-3 py-2 hover:bg-slate-800/60 rounded">
                {r.name}{r.admin1 ? ', '+r.admin1 : ''}{r.country ? ', '+r.country : ''}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
