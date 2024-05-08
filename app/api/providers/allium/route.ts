export async function POST() {
  const sql = `
select 
  max(number) last_block_num
  , max(timestamp) last_block_dttm
from ethereum.blocks
  `;

  try {
    const apiKey = process.env.ALLIUM_API_KEY;
    if (!apiKey) {
      throw new Error('ALLIUM_API_KEY is not set');
    }
    const response = await fetch(
      'https://api.allium.so/api/v1/developer/ethereum/sql/',
      {
        method: 'POST',
        headers: {
          'X-API-Key': apiKey,
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
