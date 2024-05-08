// pages/api/getLatestBlock.ts
import Web3 from 'web3';

export async function POST() {
  // RPC URL of the Ethereum node
  const rpcURL = 'http://manually-allowing-filly.n0des.xyz';

  // Initialize a web3 instance with the Ethereum node RPC URL
  const web3 = new Web3(new Web3.providers.HttpProvider(rpcURL));

  try {
    // Use web3 to get the latest block
    const latestBlock = await web3.eth.getBlock('latest');
    const blockNumber = latestBlock.number.toString();
    const blockTimestamp = latestBlock.timestamp.toString();

    return Response.json({
      blockNumber,
      blockTimestamp,
    });
  } catch (error) {
    console.error(error);
  }
}
