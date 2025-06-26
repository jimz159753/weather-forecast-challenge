export async function getForecast(lat: number, lon: number) {
    const res = await fetch(`/api/forecast?lat=${lat}&lon=${lon}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
  
    return data?.properties?.periods?.slice(0, 14); // 7-day (AM & PM)
  }
  