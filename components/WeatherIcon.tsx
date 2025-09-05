import { weatherCodeToEmoji } from '@/lib/utils';
export default function WeatherIcon({ code, size=48 }: { code: number; size?: number }) {
  return <div style={{ fontSize: size }} className="select-none">{weatherCodeToEmoji(code)}</div>;
}
