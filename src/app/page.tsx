"use client";
import { useState } from "react";
import { getCoordinates } from "./utils/getCoordinates";
import { getForecast } from "./utils/getForecast";
import Image from "next/image";

type ForecastPeriod = {
  name: string;
  temperature: number;
  temperatureUnit: string;
  shortForecast: string;
  icon: string;
};

export default function Home() {
  const [address, setAddress] = useState("");
  const [forecast, setForecast] = useState<ForecastPeriod[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { lat, lon } = await getCoordinates(address);
      const data = await getForecast(lat, lon);
      setForecast(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong.");
      }
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl mb-4 font-bold">7-Day Weather Forecast</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Get Forecast
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {forecast.length > 0 && (
        <div className="grid grid-cols-1 gap-4">
          {forecast.map((period, i) => (
            <div
              key={i}
              className="p-4 border rounded shadow-sm flex justify-between"
            >
              <div>
                <h2 className="font-semibold">{period.name}</h2>
                <p>
                  {period.temperature}°{period.temperatureUnit}
                </p>
                <p>{period.shortForecast}</p>
              </div>
              {period.icon && (
                <div className="mt-2">
                  <Image
                    src={period.icon}
                    alt={`Weather icon for ${period.shortForecast}`}
                    width={64}
                    height={64}
                    className="rounded"
                    onError={() => {
                      console.error(
                        "Failed to load weather icon:",
                        period.icon
                      );
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
