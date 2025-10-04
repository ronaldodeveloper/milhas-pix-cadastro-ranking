import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const raw = searchParams.get('mile_value')
  const mileValue = raw == null || raw === '' ? '20.50' : raw
  console.log('➡️ mile_value recebido:', mileValue)

  try {
    const res = await fetch(
      `https://api.milhaspix.com/simulate-ranking?mile_value=${encodeURIComponent(mileValue)}`,
      {
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store', // evita cache no servidor
      }
    )

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)
    }

    const data = await res.json()
    return NextResponse.json({ data })
  } catch (error) {
    console.error('❌ Erro na API /nova-oferta:', error)
    return NextResponse.json(
      { error: 'Failed to fetch data from external API' },
      { status: 500 }
    )
  }
}


// export const dynamic = 'force-static';

// export async function GET(request) {
  
//   const { searchParams } = new URL(request.url)
//   const mileValue = searchParams.get('mile_value') || '20.50'
//   console.log(mileValue);

//   try {
//     const res = await fetch(`https://api.milhaspix.com/simulate-ranking?mile_value=${mileValue}`, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })

//     if (!res.ok) {
//       throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)
//     }

//     const data = await res.json()
//     return Response.json({ data })
//   } catch (error) {
//     console.error('Error fetching', error)
//     return Response.json(
//       { error: 'Failed to fetch data from external API' },
//       { status: 500 }
//     )
//   }
// }