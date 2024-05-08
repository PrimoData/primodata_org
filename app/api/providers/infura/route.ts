export async function POST() {
  try {
    const apiKey = process.env.INFURA_API_KEY;
    if (!apiKey) {
      throw new Error('INFURA_API_KEY is not set');
    }

    const data = {
      jsonrpc: '2.0',
      method: 'eth_getBlockByNumber',
      params: ['latest', false],
      id: 1,
    };

    const response = await fetch('https://mainnet.infura.io/v3/' + apiKey, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    // console.log('responseData', responseData);
    return Response.json({ data: responseData });
  } catch (error) {
    console.log('Error running query');
  }
}
