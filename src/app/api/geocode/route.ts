// pages/api/geocode.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get('address');

  if (!address) {
    return NextResponse.json({ error: 'Missing address' }, { status: 400 });
  }

  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_CENSUS_API}?address=${encodeURIComponent(
      address
    )}&benchmark=Public_AR_Current&format=json`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to fetch coordinates' }, { status: 500 });
  }
}
