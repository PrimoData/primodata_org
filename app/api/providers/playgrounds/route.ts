export async function POST() {
  const sql = `
  {
    blocks(first: 1, orderBy: timestamp, orderDirection: desc) {
        id
        number
        timestamp
      }
  }
  `;

  try {
    const apiKey = process.env.PLAYGROUNDS_API_KEY;
    if (!apiKey) {
      throw new Error('PLAYGROUNDS_API_KEY is not set');
    }

    const response = await fetch(
      'https://api.playgrounds.network/v1/proxy/subgraphs/id/3WFXNz46rk4iuVgsBybcGtxMa4cbHkBLfuSjUvvqs2MD',
      {
        method: 'POST',
        headers: {
          'Playgrounds-Api-Key': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: sql }),
      },
    );

    const data = await response.json();
    return Response.json({ data });
  } catch (error) {
    console.log('Error running query');
  }
}
