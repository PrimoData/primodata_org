'use client';

import { HeartHandshakeIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface Item {
  id: number;
  created_at: string;
  website: string;
  logo: string;
  name: string;
  sponsor: string;
  category: string;
  description: string;
  twitter: string;
  slug: string;
}

const getData = async () => {
  const res = await fetch('/data/companies.json');
  if (!res.ok) {
    throw new Error(`Network response was not ok: ${res.statusText}`);
  }
  const data = await res.json();
  return data;
};

export function MapBlockchain() {
  const [activeLink, setActiveLink] = useState('Home');
  const handleClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    setActiveLink(section);
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 90,
        behavior: 'smooth',
      });
    }
  };

  const [items, setItems] = useState<Item[]>([]);

  const sections = {
    'Low Level Infrastructure':
      'Close to the chain - Nodes, RPCs, ETL tools, block explorers, etc...',
    'Decentralized Data':
      'Protocols used to store data in a decentralized manner on-chain.',
    'Block Explorers & Search':
      'Applications to easily search blockchain data. Must support multiple chains otherwise this list will get out of control...',
    'Onchain Data':
      'Providers with raw and processed blockchain data, such as blocks, transactions, events, etc...',
    'Enterprise Research':
      'Providers who not only offer blockchain data, but also proprietary platforms with tools to research and analyze the data.',
    'Market Data':
      'Mostly APIs and token go up data. Some granular DeFi analytics.',
    'NFT Data': 'Various tools offering data, analytics, and insights on NFTs.',
    'Product Analytics':
      'Focused on measuring community acquisition, engagement, retention, etc...',
    'Security & Risk':
      'Data sets and tools focused on monitoring and analyzing on-chain security.',
    'Bitcoin Data': 'Data providers with a specific focus on Bitcoin.',
    'Speciality Data':
      'Data providers with a specific focus on metaverse, wallets, DAOs, social, etc...',
    'Data Tools':
      'Tools with specific purposes such as search, alerts, dev tools, etc...',
    'Communities & Learning':
      'Various communities and platforms to learn about blockchain data.',
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setItems(data); // Adjust according to the actual structure of your JSON
    };
    fetchData();
  }, []);

  return (
    <section className="w-full py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2 mb-0">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-black">
                Blockchain Data Landscape
              </h1>
              <h2 className="max-w-[600px] text-zinc-500 md:text-xl mx-auto">
                Ecosystem overview of the companies and tools providing data,
                APIs, and analytics across various blockchains.
              </h2>
            </div>

            <div className="w-full max-w-full space-y-4 mx-auto">
              <div className="grid grid-cols-12 gap-8">
                <>
                  <div className="col-span-full -mb-2">
                    <nav className="flex flex-wrap justify-center max-w-[800px] mx-auto">
                      {Object.keys(sections).map((section) => (
                        <button
                          key={section}
                          onClick={(e) => handleClick(e, section)}
                          className={`text-sm font-semibold rounded-lg border border-slate-500'
                                : 'border-b-2 border-gray-500' ${
                                  activeLink === section
                                    ? 'border-b-4 border-black'
                                    : 'border-b-2 border-gray-500'
                                } w-auto px-4 m-1 py-2`}
                        >
                          <div className="flex flex-col items-center md:flex-row">
                            <span>{section}</span>
                          </div>
                        </button>
                      ))}
                    </nav>
                    <p className="text-xs font-light flex flex-wrap justify-center items-center">
                      <u>Supporters:</u>
                      <span
                        className="text-xs font-bold text-black rounded-full py-1 px-3 my-2 mx-1 inline-flex items-center"
                        style={{ background: 'gold' }}
                      >
                        <HeartHandshakeIcon className="mr-1" />
                        Gold
                      </span>
                      <span
                        className="text-xs font-bold text-black rounded-full py-1 px-3 my-2 mx-1 inline-flex items-center"
                        style={{ background: 'silver' }}
                      >
                        <HeartHandshakeIcon className="mr-1" />
                        Silver
                      </span>
                      <span
                        className="text-xs font-bold text-black rounded-full py-1 px-3 my-2 mx-1 inline-flex items-center"
                        style={{ background: '#cd7f32' }}
                      >
                        <HeartHandshakeIcon className="mr-1" />
                        Bronze
                      </span>
                    </p>
                  </div>
                  {Object.entries(sections).map(([section, description]) => (
                    <div
                      key={section}
                      className="flex flex-col col-span-12 space-y-2 p-4 rounded-lg"
                    >
                      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-8 border rounded-xl shadow-lg p-4 border-slate-500 pb-6">
                        <div className="col-span-full">
                          <h3
                            id={section}
                            className="text-3xl font-bold text-left"
                          >
                            {section}
                          </h3>
                          <p className="text-left mt-4 mb-0 pb-0 text-slate-500">
                            {description}
                          </p>
                        </div>
                        {items
                          .filter((item) => item.category === section)
                          .map((item, index) => (
                            <div
                              key={index}
                              className="flex flex-col text-center"
                            >
                              <a
                                href={`/company/${item.slug}`}
                                rel="noreferrer"
                                style={{
                                  display: 'inline-block',
                                }}
                                className="text-sm font-bold text-black"
                              >
                                <img
                                  src={item.logo}
                                  alt={item.name}
                                  className="hover:shadow-2xl transition-shadow duration-200 rounded-full mb-2 border-2 aspect-square"
                                />
                                {item.name}
                                {item.sponsor === '1. Gold' &&
                                  item.name != 'Allium' && (
                                    <span
                                      className="text-xs font-light rounded-md py-1 px-2 my-2 inline-flex items-center"
                                      style={{ background: 'gold' }}
                                    >
                                      <HeartHandshakeIcon
                                        size={16}
                                        className="mr-1"
                                      />
                                      Supporter
                                    </span>
                                  )}
                                {item.sponsor === '2. Silver' && (
                                  <span
                                    className="text-xs font-light rounded-md py-1 px-2 my-2 inline-flex items-center"
                                    style={{ background: 'silver' }}
                                  >
                                    <HeartHandshakeIcon
                                      size={16}
                                      className="mr-1"
                                    />
                                    Supporter
                                  </span>
                                )}
                                {item.sponsor === '3. Bronze' && (
                                  <span
                                    className="text-xs font-light rounded-md py-1 px-2 my-2 inline-flex items-center"
                                    style={{ background: '#cd7f32' }}
                                  >
                                    <HeartHandshakeIcon
                                      size={16}
                                      className="mr-1"
                                    />
                                    Supporter
                                  </span>
                                )}
                              </a>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
