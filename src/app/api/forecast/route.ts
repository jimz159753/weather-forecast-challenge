// pages/api/forecast.ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  if (!lat || !lon) {
    return NextResponse.json({ error: 'Missing lat or lon' }, { status: 400 });
  }

  try {
    const pointRes = await fetch(`${process.env.NEXT_PUBLIC_WEATHER_API}/points/${lat},${lon}`);
    const pointData = await pointRes.json();

    const forecastUrl = pointData?.properties?.forecast;

    if (!forecastUrl) {
      return NextResponse.json({ error: 'Forecast URL not found' }, { status: 400 });
    }

    const forecastRes = await fetch(forecastUrl);
    const forecastData = await forecastRes.json();

    return NextResponse.json(forecastData);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch forecast' }, { status: 500 });
  }
}
