
export const dynamic = 'force-static';

export async function GET(request) {
  
  const { searchParams } = new URL(request.url)
  const mileValue = searchParams.get('mile_value') || '16.50'

  try {
    const res = await fetch(`https://api.milhaspix.com/simulate-ranking?mile_value=${mileValue}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)
    }

    const data = await res.json()
    return Response.json({ data })
  } catch (error) {
    console.error('Error fetching', error)
    return Response.json(
      { error: 'Failed to fetch data from external API' },
      { status: 500 }
    )
  }
}