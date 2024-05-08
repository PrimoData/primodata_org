export async function POST() {
  try {
    const apiKey = 'BmqoqD6522oGdC';
    if (!apiKey) {
      throw new Error('SYVE_API_KEY is not set');
    }

    const response = await fetch(
      'https://api.syve.ai/v1/filter-api/blocks',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'key': apiKey , 'size': 1, 'sort': 'desc'}),
      },
    );

    const data = await response.json();
    return Response.json({ data });
  } catch (error) {
    console.log('Error running query');
  }
}
