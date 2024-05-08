'use client';

import React, { useEffect, useState } from 'react';

const getBlockchainData = async () => {
  const res = await fetch('/api/blockchain-companies', { method: 'POST' });
  if (!res.ok) {
    throw new Error(`Network response was not ok: ${res.statusText}`);
  }
  const text = await res.text();
  if (!text) {
    throw new Error('Empty response from server');
  }
  return JSON.parse(text);
};

const getAIData = async () => {
  const res = await fetch('/api/ai-companies', { method: 'POST' });
  if (!res.ok) {
    throw new Error(`Network response was not ok: ${res.statusText}`);
  }
  const text = await res.text();
  if (!text) {
    throw new Error('Empty response from server');
  }
  return JSON.parse(text);
};

export function Markets() {
  const [blockchainCount, setBlockchainCount] = useState(0);
  const [maxBlockhainCreatedAt, setMaxBlockchainCreatedAt] =
    useState<Date | null>(null);

  const [aiCount, setAICount] = useState(0);
  const [maxAICreatedAt, setMaxAICreatedAt] = useState<Date | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const blockchaindata = await getBlockchainData();
      setBlockchainCount(blockchaindata.data.length);

      // Extract created_at dates and find the maximum
      const maxBlockchainDate = new Date(
        Math.max(
          ...blockchaindata.data.map(
            (item: { created_at: string }) => new Date(item.created_at),
          ),
        ),
      );
      setMaxBlockchainCreatedAt(maxBlockchainDate);

      const aidata = await getAIData();
      setAICount(aidata.data.length);
      const maxAIDate = new Date(
        Math.max(
          ...aidata.data.map(
            (item: { created_at: string }) => new Date(item.created_at),
          ),
        ),
      );
      setMaxAICreatedAt(maxAIDate);
    };

    fetchData();
  }, []);

  return (
    <section className="w-full py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none bg-clip-text text-black">
                Market Maps
              </h2>
              <p className="max-w-[620px] text-zinc-500 md:text-xl mx-auto">
                Curated collection of companies building across various markets.
              </p>
            </div>
            <div className="w-full max-w-full space-y-4 md:px-16">
              <a href="/generative-ai">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-2 border border-black rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200">
                  <div className="flex flex-col md:col-span-3 space-y-2 border-gray-800 p-4 md:p-8 rounded-lg text-left">
                    <h3 className="text-2xl font-bold text-black">
                      Generative AI
                    </h3>
                    <p className="text-zinc-500 text-xl">
                      Products, platforms, applications, and models that use
                      artifical intelligence to create.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-2 rounded-lg justify-center">
                    <p className="font-bold text-xl text-white bg-green-500 rounded-full px-6 py-2">
                      {aiCount}
                    </p>{' '}
                    <p className="text-zinc-500">Companies</p>
                  </div>
                  <div className="flex flex-col md:col-span-2 items-center space-y-2 border-gray-800 p-4 rounded-lg justify-center">
                    <p className="text-xl font-bold text-black">
                      {maxAICreatedAt ? maxAICreatedAt.toDateString() : 'N/A'}
                    </p>
                    <p className="text-zinc-500">Last Updated</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="w-full max-w-full space-y-4 md:px-16">
              <a href="/blockchain-data">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-2 border border-black rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200">
                  <div className="flex flex-col md:col-span-3 space-y-2 border-gray-800 p-4 md:p-8 rounded-lg text-left">
                    <h3 className="text-2xl font-bold text-black">
                      Blockchain Data
                    </h3>
                    <p className="text-zinc-500 text-xl">
                      Directory of tools to consume, analyze, and/or visualize
                      onchain data.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-2 rounded-lg justify-center">
                    <p className="font-bold text-xl text-white bg-green-500 rounded-full px-6 py-2">
                      {blockchainCount}
                    </p>
                    <p className="text-zinc-500">Companies</p>
                  </div>
                  <div className="flex flex-col md:col-span-2 items-center space-y-2 border-gray-800 p-4 rounded-lg justify-center">
                    <p className="text-xl font-bold text-black">
                      {' '}
                      {maxBlockhainCreatedAt
                        ? maxBlockhainCreatedAt.toDateString()
                        : 'N/A'}
                    </p>
                    <p className="text-zinc-500">Last Updated</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
