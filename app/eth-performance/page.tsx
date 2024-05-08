'use client';

import { Methodology } from './components/methodology';
import CustomYAxisTick from '@/app/eth-performance/components/logo-axis';
import { Button } from '@/components/ui/button';
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card';
import { Gauge } from 'lucide-react';
import React, { useEffect, useState, PropsWithChildren } from 'react';
import {
  BarChart,
  LabelList,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
} from 'recharts';

type StateType = {
  barData: {
    provider: string;
    latencySec?: number;
    queryTime?: number;
    latestBlockNum?: number;
  }[];
};

export default function Performance() {
  const [dataState, setDataState] = useState<StateType>({
    barData: [],
  });

  const updateAlliumData = async (blockDateTimeUTC: Date) => {
    const startTime = Date.now();
    const res = await fetch('/api/providers/allium', { method: 'POST' });
    const response = await res.json();
    const responseTime = Date.now();
    const querySec = parseFloat(((responseTime - startTime) / 1000).toFixed(2));
    const result = response.data[0];

    if (result) {
      const date = new Date(result.last_block_dttm + 'Z');
      const latency = parseFloat(
        ((blockDateTimeUTC.getTime() - date.getTime()) / 1000).toFixed(2),
      );

      setDataState((prevState) => {
        const newBarData = prevState.barData.map((item) => {
          if (item.provider === 'Allium') {
            return {
              ...item,
              latencySec: latency,
              queryTime: querySec,
              latestBlockNum: result.last_block_num,
            };
          }
          return item;
        });

        return {
          ...prevState,
          barData: newBarData,
        };
      });
    }
  };

  const updateBitqueryData = async (blockDateTimeUTC: Date) => {
    const startTime = Date.now();
    const res = await fetch('/api/providers/bitquery', { method: 'POST' });
    const response = await res.json();
    const responseTime = Date.now();
    const querySec = parseFloat(((responseTime - startTime) / 1000).toFixed(2));
    const result = response.data.data.EVM.Blocks[0];

    if (result) {
      const date = new Date(result.Block.Time);
      const latency = parseFloat(
        ((blockDateTimeUTC.getTime() - date.getTime()) / 1000).toFixed(2),
      );

      setDataState((prevState) => {
        const newBarData = prevState.barData.map((item) => {
          if (item.provider === 'Bitquery') {
            return {
              ...item,
              latencySec: latency,
              queryTime: querySec,
              latestBlockNum: result.Block.Number,
            };
          }
          return item;
        });

        return {
          ...prevState,
          barData: newBarData,
        };
      });
    }
  };

  const updateBlockjoyData = async (blockDateTimeUTC: Date) => {
    const startTime = Date.now();
    const res = await fetch('/api/providers/blockjoy', { method: 'POST' });
    const response = await res.json();
    const responseTime = Date.now();
    const querySec = parseFloat(((responseTime - startTime) / 1000).toFixed(2));

    if (response) {
      const date = new Date(response.blockTimestamp * 1000);
      const latency = parseFloat(
        ((blockDateTimeUTC.getTime() - date.getTime()) / 1000).toFixed(2),
      );

      setDataState((prevState) => {
        const newBarData = prevState.barData.map((item) => {
          if (item.provider === 'Blockjoy') {
            return {
              ...item,
              latencySec: latency,
              queryTime: querySec,
              latestBlockNum: response.blockNumber,
            };
          }
          return item;
        });

        return {
          ...prevState,
          barData: newBarData,
        };
      });
    }
  };

  const updateChainbaseData = async (blockDateTimeUTC: Date) => {
    const startTime = Date.now();
    const res = await fetch('/api/providers/chainbase', { method: 'POST' });
    const response = await res.json();
    const responseTime = Date.now();
    const querySec = parseFloat(((responseTime - startTime) / 1000).toFixed(2));
    const result = response.results.data.data[0];

    if (result) {
      const date = new Date(result[1] + 'Z');
      const latency = parseFloat(
        ((blockDateTimeUTC.getTime() - date.getTime()) / 1000).toFixed(2),
      );

      setDataState((prevState) => {
        const newBarData = prevState.barData.map((item) => {
          if (item.provider === 'Chainbase') {
            return {
              ...item,
              latencySec: latency,
              queryTime: querySec,
              latestBlockNum: result[0],
            };
          }
          return item;
        });

        return {
          ...prevState,
          barData: newBarData,
        };
      });
    }
  };

  const updatePlaygroundsData = async (blockDateTimeUTC: Date) => {
    const startTime = Date.now();
    const res = await fetch('/api/providers/playgrounds', { method: 'POST' });
    const response = await res.json();
    const responseTime = Date.now();
    const querySec = parseFloat(((responseTime - startTime) / 1000).toFixed(2));
    const result = response.data.data.blocks[0];

    if (result) {
      const date = new Date(result.timestamp * 1000);
      const latency = parseFloat(
        ((blockDateTimeUTC.getTime() - date.getTime()) / 1000).toFixed(2),
      );

      setDataState((prevState) => {
        const newBarData = prevState.barData.map((item) => {
          if (item.provider === 'Playgrounds') {
            return {
              ...item,
              latencySec: latency,
              queryTime: querySec,
              latestBlockNum: result.number,
            };
          }
          return item;
        });

        return {
          ...prevState,
          barData: newBarData,
        };
      });
    }
  };

  const updateSpiceData = async (blockDateTimeUTC: Date) => {
    const startTime = Date.now();
    const res = await fetch('/api/providers/spice', { method: 'POST' });
    const response = await res.json();
    const responseTime = Date.now();
    const querySec = parseFloat(((responseTime - startTime) / 1000).toFixed(2));
    const result = response.data.rows[0];

    if (result) {
      const date = new Date(result.latest_block_dttm + 'Z');
      const latency = parseFloat(
        ((blockDateTimeUTC.getTime() - date.getTime()) / 1000).toFixed(2),
      );

      setDataState((prevState) => {
        const newBarData = prevState.barData.map((item) => {
          if (item.provider === 'Spice AI') {
            return {
              ...item,
              latencySec: latency,
              queryTime: querySec,
              latestBlockNum: result.latest_block_num,
            };
          }
          return item;
        });

        return {
          ...prevState,
          barData: newBarData,
        };
      });
    }
  };

  const updateSyveData = async (blockDateTimeUTC: Date) => {
    const startTime = Date.now();
    const res = await fetch('/api/providers/syve', { method: 'POST' });
    const response = await res.json();
    const responseTime = Date.now();
    const querySec = parseFloat(((responseTime - startTime) / 1000).toFixed(2));
    const result = response.data[0];

    if (result) {
      const date = new Date(parseInt(result.timestamp) * 1000);
      const latency = parseFloat(
        ((blockDateTimeUTC.getTime() - date.getTime()) / 1000).toFixed(2),
      );

      setDataState((prevState) => {
        const newBarData = prevState.barData.map((item) => {
          if (item.provider === 'Syve') {
            return {
              ...item,
              latencySec: latency,
              queryTime: querySec,
              latestBlockNum: result.block_number,
            };
          }
          return item;
        });

        return {
          ...prevState,
          barData: newBarData,
        };
      });
    }
  };

  const updateDuneData = async () => {
    const startTime = Date.now();
    const res = await fetch('/api/providers/dune', { method: 'POST' });
    const response = await res.json();
    const result = response.data.result.rows[0];

    if (result) {
      setDataState((prevState) => {
        const newBarData = prevState.barData.map((item) => {
          if (item.provider === 'Dune') {
            return {
              ...item,
              latencySec: result.latency_sec,
              queryTime: parseFloat(
                ((Date.now() - startTime) / 1000).toFixed(2),
              ),
              latestBlockNum: result.latest_block_num,
            };
          }
          return item;
        });

        return {
          ...prevState,
          barData: newBarData,
        };
      });
    }
  };

  const updateFlipsideData = async () => {
    const startTime = Date.now();
    const res = await fetch('/api/providers/flipside', { method: 'POST' });
    const response = await res.json();
    const result = response.queryResultSet.records[0];
    console.log('result');
    console.log(result);

    if (result) {
      setDataState((prevState) => {
        const newBarData = prevState.barData.map((item) => {
          if (item.provider === 'Flipside') {
            return {
              ...item,
              latencySec: result.latency_seconds,
              queryTime: parseFloat(
                ((Date.now() - startTime) / 1000).toFixed(2),
              ),
              latestBlockNum: result.latest_block_num,
            };
          }
          return item;
        });

        return {
          ...prevState,
          barData: newBarData,
        };
      });
    }
  };

  const updateTransposeData = async () => {
    const startTime = Date.now();
    const res = await fetch('/api/providers/transpose', { method: 'POST' });
    const response = await res.json();
    const result = response.data?.results[0];

    if (result) {
      setDataState((prevState) => {
        const newBarData = prevState.barData.map((item) => {
          if (item.provider === 'Transpose') {
            return {
              ...item,
              latencySec: parseFloat(
                result.latency_sec
                  .split(':')
                  .reduce((acc: number, time: string) => 60 * acc + +time, 0)
                  .toFixed(2),
              ),
              queryTime: parseFloat(
                ((Date.now() - startTime) / 1000).toFixed(2),
              ),
              latestBlockNum: result.latest_block_num,
            };
          }
          return item;
        });

        return {
          ...prevState,
          barData: newBarData,
        };
      });
    }
  };

  const runQuery = async () => {
    const res = await fetch('/api/providers/infura', { method: 'POST' });
    const response = await res.json();
    const block_timestamp = parseInt(response.data['result']['timestamp'], 16);
    const blockDateTimeUTC = new Date(block_timestamp * 1000);

    setDataState({
      barData: [
        {
          provider: 'Allium',
        },
        {
          provider: 'Bitquery',
        },
        {
          provider: 'Blockjoy',
        },
        {
          provider: 'Chainbase',
        },
        // {
        //   provider: 'Dune',
        // },
        // {
        //   provider: 'Flipside',
        // },
        {
          provider: 'Playgrounds',
        },
        {
          provider: 'Spice AI',
        },
        {
          provider: 'Syve',
        },
        // {
        //   provider: 'Transpose',
        // },
      ],
    });

    await Promise.all([
      updateAlliumData(blockDateTimeUTC),
      updateBlockjoyData(blockDateTimeUTC),
      updateBitqueryData(blockDateTimeUTC),
      updateChainbaseData(blockDateTimeUTC),
      updatePlaygroundsData(blockDateTimeUTC),
      updateSpiceData(blockDateTimeUTC),
      updateSyveData(blockDateTimeUTC),
      // updateDuneData(),
      // updateFlipsideData(),
      // updateTransposeData(),
    ]);
  };

  useEffect(() => {
    runQuery();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <h1 className="text-xl">Blockchain Data Providers*</h1>
      </div>

      <div className="flex items-center justify-center">
        <h3 className="text-3xl font-bold mb-5">Ethereum Latency</h3>
      </div>

      <div className="flex items-center justify-center">
        <Button
          onClick={runQuery}
          style={{ background: 'gold' }}
          className="text-black shadow-lg hover:shadow-xl"
        >
          <Gauge className="h-5 w-5 mr-2" />
          <h3>Run Speed Test</h3>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 mx-4 md:mx-24 mt-4 mb-5">
        <Card className=" max-w-2xl my-4">
          <CardHeader>
            <CardTitle>Response Time (sec)</CardTitle>
            <CardDescription>
              API Response datetime - Request datetime.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <QueryTimeChart data={dataState.barData} className="aspect-[5/4]" />{' '}
          </CardContent>
        </Card>
        <Card className=" max-w-2xl my-4">
          <CardHeader>
            <CardTitle>Last Block</CardTitle>
            <CardDescription>Number of the Last Block.</CardDescription>
          </CardHeader>
          <CardContent>
            <BlockChart data={dataState.barData} className="aspect-[5/4]" />{' '}
          </CardContent>
        </Card>
        <Card className="max-w-2xl my-4">
          <CardHeader>
            <CardTitle>Block Latency (sec)</CardTitle>
            <CardDescription>
              Last Block datetime (
              <a
                href="https://docs.infura.io/networks/ethereum/json-rpc-methods/eth_getblockbynumber"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Infura JSON-RPC
              </a>
              ) - Last Block datetime (Provider).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LatencyChart data={dataState.barData} className="aspect-[5/4]" />{' '}
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-center">
        <p className="text-sm mb-16 mx-8">
          <i>
            *Note: Only including providers who are supporters of Primo Data.{' '}
          </i>
        </p>
      </div>

      <div className="flex items-center justify-center mb-8">
        <hr className="w-1/2" />
      </div>

      <div className="flex items-center justify-center">
        <h3 className="text-xl font-bold">Methodology</h3>
      </div>
      <div className="flex items-center justify-center mx-4 md:mx-32 mt-4 mb-16">
        <Methodology />
      </div>
    </>
  );
}

function LatencyChart({ data, ...props }: PropsWithChildren<any>) {
  // Sort data in ascending order based on latencySec, with null or missing values at the end
  const sortedData = [...data]
    .sort((a, b) => {
      if (a.queryTime === null || a.queryTime === undefined) return 1;
      if (b.queryTime === null || b.queryTime === undefined) return -1;
      return a.queryTime - b.queryTime;
    })
    .sort((a, b) => {
      if (a.latencySec === null || a.latencySec === undefined) return 1;
      if (b.latencySec === null || b.latencySec === undefined) return -1;
      return a.latencySec - b.latencySec;
    });

  return (
    <div {...props}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sortedData}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
        >
          <XAxis type="number" hide={true} />
          <YAxis
            dataKey="provider"
            type="category"
            tick={(props) => <CustomYAxisTick {...props} />}
            width={120}
          />
          <Bar dataKey="latencySec" fill="#22c55e">
            <LabelList
              dataKey="latencySec"
              position="right"
              style={{ fill: 'black' }}
              className="text-xs"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function QueryTimeChart({ data, ...props }: PropsWithChildren<any>) {
  // Sort data in ascending order based on queryTime, with null or missing values at the end
  const sortedData = [...data].sort((a, b) => {
    if (a.queryTime === null || a.queryTime === undefined) return 1;
    if (b.queryTime === null || b.queryTime === undefined) return -1;
    return a.queryTime - b.queryTime;
  });

  return (
    <div {...props}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sortedData}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
        >
          <XAxis type="number" hide={true} />
          <YAxis
            dataKey="provider"
            type="category"
            tick={(props) => <CustomYAxisTick {...props} />}
            width={120}
          />
          <Bar dataKey="queryTime" fill="#22c55e">
            <LabelList
              dataKey="queryTime"
              position="right"
              style={{ fill: 'black' }}
              className="text-xs"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function BlockChart({ data, ...props }: PropsWithChildren<any>) {
  // Sort data in descending order based on latestBlockNum, with null or missing values at the end
  const sortedData = [...data]
    .sort((a, b) => {
      if (a.queryTime === null || a.queryTime === undefined) return 1;
      if (b.queryTime === null || b.queryTime === undefined) return -1;
      return a.queryTime - b.queryTime;
    })
    .sort((a, b) => {
      if (a.latestBlockNum === null || a.latestBlockNum === undefined) return 1;
      if (b.latestBlockNum === null || b.latestBlockNum === undefined)
        return -1;
      return b.latestBlockNum - a.latestBlockNum;
    });

  return (
    <div {...props}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sortedData}
          layout="vertical"
          margin={{ top: 5, right: 80, left: 5, bottom: 5 }}
        >
          <XAxis
            type="number"
            domain={[
              sortedData.length > 0
                ? sortedData.reduce(
                    (min: number, p: { latestBlockNum: number }) =>
                      p.latestBlockNum < min ? p.latestBlockNum : min,
                    sortedData[0].latestBlockNum,
                  ) - 10
                : 0,
              'auto',
            ]}
            hide={true}
          />
          <YAxis
            dataKey="provider"
            type="category"
            tick={(props) => <CustomYAxisTick {...props} />}
            width={120}
          />
          <Bar dataKey="latestBlockNum" fill="#22c55e">
            <LabelList
              dataKey="latestBlockNum"
              position="right"
              style={{ fill: 'black' }}
              className="text-xs"
              formatter={(value: any) => Number(value).toLocaleString()}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
