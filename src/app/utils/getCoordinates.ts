export async function getCoordinates(address: string) {
    const res = await fetch(`/api/geocode?address=${address}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    console.log(data);
  
    const coords = data?.result?.addressMatches[0]?.coordinates;
  
    if (!coords) throw new Error("Unable to geocode address.");
  
    return { lat: coords.y, lon: coords.x };
  }
  