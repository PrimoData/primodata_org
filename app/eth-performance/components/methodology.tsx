import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function Methodology() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-8">
        <AccordionTrigger>Allium (SQL API)</AccordionTrigger>
        <AccordionContent>
          Using the{' '}
          <a
            href="https://docs.allium.so/allium-app/allium-developer"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500"
          >
            Developer API
          </a>
          . <br /> <br /> Query:
          <pre className="text-xs bg-black text-white p-4 mt-3">
            {`select 
  max(number) last_block_num
  , max(timestamp) last_block_dttm
from ethereum.blocks`}
          </pre>{' '}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-0">
        <AccordionTrigger>Bitquery (GraphQL API)</AccordionTrigger>
        <AccordionContent>
          Using the{' '}
          <a
            href="https://docs.bitquery.io/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500"
          >
            Streaming API
          </a>
          . <br /> <br /> Query:
          <pre className="text-xs bg-black text-white p-4 mt-3">
            {`EVM(network: eth) {
    Blocks(limit: {count: 1}, orderBy: {descending: Block_Number}) {
      Block {
          Number
          Time
      }
    }
}`}
          </pre>{' '}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-10">
        <AccordionTrigger>Blockjoy (JSON-RPC)</AccordionTrigger>
        <AccordionContent>
          Direct connection to the RPC of a node hosted on Blockjoy via web3.js.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-1">
        <AccordionTrigger>Chainbase (SQL API)</AccordionTrigger>
        <AccordionContent>
          Using the{' '}
          <a
            href="https://docs.chainbase.com/docs/sql-api-overview"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500"
          >
            SQL API
          </a>{' '}
          and "Alpha" query engine. <br /> <br /> Query:
          <pre className="text-xs bg-black text-white p-4 mt-3">
            {`select
    max(block_number) last_block_num
    , max(block_timestamp) last_block_dttm
from ethereum.blocks`}
          </pre>{' '}
        </AccordionContent>
      </AccordionItem>
      {/* <AccordionItem value="item-2">
        <AccordionTrigger>Dune</AccordionTrigger>
        <AccordionContent>
          Using the{' '}
          <a
            href="https://dune.com/pricing"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500"
          >
            Free plan
          </a>{' '}
          and{' '}
          <a
            href="https://dune.com/docs/query/query-executions/#query-engine-size"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500"
          >
            Community Engine
          </a>
          , which is subject to an API limit of 40 requests/minute, so results
          may not appear if limit is hit. <br /> <br /> Query:
          <pre className="text-xs bg-black text-white p-4 mt-3">
            {`select 
    max(number) latest_block_num
    , max(time) latest_block_dttm
    , date_diff('second', max(time), current_timestamp) latency_sec
from ethereum.blocks`}
          </pre>
        </AccordionContent>
      </AccordionItem> */}
      {/* <AccordionItem value="item-7">
        <AccordionTrigger>Flipside</AccordionTrigger>
        <AccordionContent>
          Using the Free plan and{' '}
          <a
            href="https://docs.flipsidecrypto.com/api-sdk-developers/getting-started"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500"
          >
            SQL API
          </a>
          . <br /> <br /> Query:
          <pre className="text-xs bg-black text-white p-4 mt-3">
            {`select 
    max(block_number) latest_block_num
    , max(block_timestamp) latest_block_dttm
    , datediff('second', max(block_timestamp), current_timestamp) latency_seconds
from ethereum.core.fact_blocks`}
          </pre>
        </AccordionContent>
      </AccordionItem> */}
      <AccordionItem value="item-4">
        <AccordionTrigger>Playgrounds (Subgraph)</AccordionTrigger>
        <AccordionContent>
          Using{' '}
          <a
            href="https://thegraph.com/explorer/subgraphs/3WFXNz46rk4iuVgsBybcGtxMa4cbHkBLfuSjUvvqs2MD?view=Playground&chain=mainnet"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500"
          >
            this subgraph
          </a>
          .
          <br /> <br /> Query:
          <pre className="text-xs bg-black text-white p-4 mt-3">
            {`blocks(first: 1, orderBy: timestamp, orderDirection: desc) {
    id
    number
    timestamp
}`}
          </pre>{' '}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Spice AI (SQL API)</AccordionTrigger>
        <AccordionContent>
          Using the{' '}
          <a
            href="https://docs.spice.ai/api/sql-query"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500"
          >
            SQL Query API
          </a>
          . There is a slightly faster way using{' '}
          <a
            href="https://docs.spice.ai/building-blocks/spice-firecache"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500"
          >
            Firecache
          </a>
          , but to keep things fair, using the table with all Ethereum blocks.
          <br /> <br /> Query:
          <pre className="text-xs bg-black text-white p-4 mt-3">
            {`select
    max(number) latest_block_num
    , to_timestamp(max("timestamp")) latest_block_dttm
from eth.blocks`}
          </pre>{' '}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger>Syve (API)</AccordionTrigger>
        <AccordionContent>
          Using the{' '}
          <a
            href="https://syve.readme.io/reference/filter-api-blocks"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500"
          >
            Filter API
          </a>
          .
          <br /> <br /> Endpoint:
          <pre className="text-xs bg-black text-white p-4 mt-3">
            {`https://api.syve.ai/v1/filter-api/blocks?size=1&sort=desc`}
          </pre>{' '}
        </AccordionContent>
      </AccordionItem>
      {/* <AccordionItem value="item-5">
        <AccordionTrigger>Transpose</AccordionTrigger>
        <AccordionContent>
          Using{' '}
          <a
            href="https://docs.transpose.io/sql/getting-started/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500"
          >
            SQL API
          </a>{' '}
          under a Free plan.
          <br /> <br /> Query:
          <pre className="text-xs bg-black text-white p-4 mt-3">
            {`select 
    max(block_number) latest_block_num
    , max(timestamp) latest_block_dttm
    , (now() - max(blocks.timestamp)) latency_seconds
from ethereum.blocks`}
          </pre>{' '}
        </AccordionContent>
      </AccordionItem> */}
    </Accordion>
  );
}
