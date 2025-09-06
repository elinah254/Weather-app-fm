'use client';
import { useEffect, useMemo, useState } from 'react';
import SearchBar from '@/components/SearchBar';
import UnitToggle from '@/components/UnitToggle';
import CurrentCard from '@/components/CurrentCard';
import MetricsGrid from '@/components/MetricsGrid';
import DailyForecast from '@/components/DailyForecast';
import HourlyPanel from '@/components/HourlyPanel';
import { UnitsProvider, useUnits } from '@/context/UnitsContext';
import { getWeather } from '@/lib/api';

function PageInner() {
  const { units } = useUnits();
  const [place, setPlace] = useState<any | null>({
    // Default immediately
    name: 'Nairobi',
    country: 'Kenya',
    latitude: -1.286389,
    longitude: 36.817223,
  });
  const [data, setData] = useState<any | null>(null);
  const [selDay, setSelDay] = useState(0);

  // Fetch weather when place/units change — no waiting, just update once data comes in
  useEffect(() => {
    if (!place) return;
    getWeather(place, units)
      .then((d) => {
        setData(d);
        setSelDay(0);
      })
      .catch((e) => console.error(e));
  }, [place, units]);

  // Hourly indices for selected day
  const indices = useMemo(() => {
    if (!data) return [];
    const dayISO = data.daily.time[selDay];
    const dayString = new Date(dayISO).toISOString().slice(0, 10);
    return data.hourly.time
      .map((t: string, i: number) => (t.startsWith(dayString) ? i : -1))
      .filter((i: number) => i >= 0);
  }, [data, selDay]);

  return (
    <main className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2 space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center md:text-left">
          How&apos;s the sky looking today?
        </h2>

        <div className="flex justify-center md:justify-start">
          <div className="w-full md:w-3/4">
            <SearchBar onSelect={(p) => setPlace(p)} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {data && place && <CurrentCard data={data} place={place} />}
          {data && <MetricsGrid data={data} />}
          {data && (
            <DailyForecast
              data={data}
              onSelect={setSelDay}
              selected={selDay}
            />
          )}
        </div>
      </div>

      <div className="md:col-span-1">
        <div className="sticky top-20">
          <UnitToggle />
          <div className="mt-4">
            {data && <HourlyPanel data={data} indices={indices.slice(0, 10)} />}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <UnitsProvider>
      <PageInner />
    </UnitsProvider>
  );
}

