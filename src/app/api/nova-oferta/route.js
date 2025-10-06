import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const raw = searchParams.get('mile_value')
  const mileValue = raw == null || raw === '' ? '16.50' : raw
  console.log('mile_value recebido:', mileValue)

  try {
    const res = await fetch(
      `https://api.milhaspix.com/simulate-ranking?mile_value=${encodeURIComponent(mileValue)}`,
      {
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store', 
      }
    )

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)
    }

    const data = await res.json()
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Erro na API /nova-oferta:', error)
    return NextResponse.json(
      { error: 'Failed to fetch data from external API' },
      { status: 500 }
    )
  }
}
