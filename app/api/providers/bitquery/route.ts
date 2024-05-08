export async function POST() {
  const sql = `
  {
    EVM(network: eth) {
      Blocks(limit: {count: 1}, orderBy: {descending: Block_Number}) {
        Block {
          Number
          Time
        }
      }
    }
  }
  `;

  try {
    const apiKey = process.env.BITQUERY_API_KEY;
    const token = process.env.BITQUERY_ACCESS_TOKEN;
    if (!apiKey) {
      throw new Error('BITQUERY_API_KEY is not set');
    }

    const response = await fetch('https://streaming.bitquery.io/graphql', {
      method: 'POST',
      headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({ query: sql }),
    });

    const data = await response.json();
    return Response.json({ data });
  } catch (error) {
    console.log('Error running query');
  }
}
