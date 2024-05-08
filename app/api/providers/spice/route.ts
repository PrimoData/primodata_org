export async function POST() {
  const sql = `
    select
      max(number) latest_block_num
      , to_timestamp(max("timestamp")) latest_block_dttm
    from eth.blocks
  `;

  try {
    const apiKey = process.env.SPICE_API_KEY;
    if (!apiKey) {
      throw new Error('SPICE_API_KEY is not set');
    }
    const response = await fetch('https://data.spiceai.io/v1/sql', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
      },
      body: sql,
    });
    const data = await response.json();
    return Response.json({ data });
  } catch (error) {
    console.log('Error running query');
  }
}
