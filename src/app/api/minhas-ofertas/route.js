

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://api.milhaspix.com/simulate-offers-list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}, statusText: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Error fetching offers:', error.message);
    return NextResponse.json(
      { error: 'Failed to fetch offers', details: error.message },
      { status: 500 }
    );
  }
}