import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Weather Now - FM Hackathon',
  description: 'Weather app implemented with Next.js, Tailwind and TypeScript'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <header className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-xl font-bold shadow-md">☀️</div>
              <div className="text-white font-semibold">Weather Now</div>
            </div>
            <div>
              <button className="bg-slate-800/60 px-3 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-slate-800/80">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"/></svg>
                Units
              </button>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
