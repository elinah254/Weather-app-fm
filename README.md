Got it 👍 Here’s a **more detailed, polished README** you can drop into your project root (`README.md`). It’s styled like a proper Frontend Mentor submission and matches the hackathon requirements:

---

```markdown
# Weather Now — Frontend Mentor Weather App (Exact UI)

This is my solution to the [Frontend Mentor Weather App challenge](https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49).  
It is built with **Next.js 14, Tailwind CSS, and TypeScript** and designed to **exactly match the provided screenshots** for both desktop and mobile views.  

The app integrates with the **Open-Meteo Forecast and Geocoding APIs** (no API key required).

---

## 📸 Screenshots

### Desktop
![Desktop Screenshot](./screenshots/desktop.png)

### Mobile
![Mobile Screenshot](./screenshots/mobile.png)

---

## 🚀 Features

- 🔍 **Search locations** (via Open-Meteo Geocoding API)
- 🌡️ **Current weather hero card** with:
  - Large temperature display
  - Weather condition icon
  - Gradient background
- 📊 **Weather metrics row** with:
  - Feels like temperature
  - Humidity %
  - Wind speed
  - Precipitation
- 📅 **7-day forecast**
  - Min/max temps + icons
  - Horizontal scroll on small screens
- ⏰ **Hourly forecast**
  - Desktop → right-hand panel
  - Mobile → stacked below daily forecast, horizontally scrollable
  - Day selector (switch between days)
- ⚙️ **Units dropdown**
  - Toggle Metric / Imperial
  - Updates temperature (°C / °F), wind (km/h / mph), precipitation (mm / in)
- 📱 **Responsive design**
  - Layout adapts across breakpoints
  - Hover/focus states for all interactive elements

---

## 🛠️ Built with

- [Next.js 14](https://nextjs.org/) — React framework
- [TypeScript](https://www.typescriptlang.org/) — Static typing
- [Tailwind CSS](https://tailwindcss.com/) — Styling and responsive design
- [Open-Meteo API](https://open-meteo.com/) — Weather + Geocoding data

---

## 📂 Project Structure

```

/
├── app/                # Next.js App Router pages
│   ├── globals.css     # Tailwind + custom styles
│   └── page.tsx        # Main weather page
├── components/         # Reusable UI components
│   ├── HourlyForecast.tsx
│   ├── UnitsDropdown.tsx
│   ├── MetricsRow\.tsx
│   └── DailyForecast.tsx
├── public/             # Static assets (icons, screenshots)
├── README.md           # This file
└── next.config.js      # Next.js configuration

````

---

## 🧑‍💻 How to run locally

1. Clone the repository  
   ```bash
   git clone https://github.com/your-username/weather-now.git
   cd weather-now
````

2. Install dependencies

   ```bash
   npm install
   ```

3. Run the dev server

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser 🎉

---

## 📌 Notes

* Design details (spacing, gradients, colors, and shadows) were carefully matched to the screenshots using Tailwind utilities and a few custom styles in `app/globals.css`.
* The app does **not require an API key**, since Open-Meteo is free and keyless.
* The hourly/day selector updates the data dynamically, while the units dropdown triggers a refetch with the correct unit system.

---

## 👤 Author

* Frontend Mentor — (https://www.frontendmentor.io/profile/elinah254)
* GitHub — (https://github.com/elinah254)


---

## 🙌 Acknowledgments

Big thanks to [Frontend Mentor](https://www.frontendmentor.io/) for the challenge and the community feedback.
Also thanks to the **Open-Meteo team** for providing a fantastic free API for weather data.

```

