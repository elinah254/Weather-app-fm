'use client';
import { createContext, useContext, useState } from 'react';
import type { Units } from '@/lib/types';

const defaultUnits: Units = { temperature: 'celsius', wind: 'kmh', precip: 'mm' };
const Ctx = createContext<{ units: Units; setUnits: (u: Units)=>void }>({ units: defaultUnits, setUnits: ()=>{} });

export function UnitsProvider({ children }: { children: React.ReactNode }) {
  const [units, setUnits] = useState<Units>(defaultUnits);
  return <Ctx.Provider value={{ units, setUnits }}>{children}</Ctx.Provider>;
}

export const useUnits = () => useContext(Ctx);
